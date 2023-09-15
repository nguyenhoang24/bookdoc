import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, Output, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { FormGroupDirective, ControlContainer } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TodoItemFlatNode, TodoItemNode } from 'src/app/_interfaces/dashboard-hivinfo';

@Component({
  selector: 'select-tree',
  templateUrl: './select-tree.component.html',
  styleUrls: ['./select-tree.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class SelectTreeComponent {
  @Input() data: any[] = [];
  @Input() matTreeNodePaddingIndent: number = 40;
  @Input() classTree: string = null;
  @Input() isTooltip: boolean = false;
  @Output() selected = new EventEmitter<any>;

  @Input() label: string = null;
  openPopper: boolean = false;
  @ViewChild("ItemSelectAll") ItemSelectAll: ElementRef<HTMLDivElement> = null;
  @ViewChild("ListItemSelect") ListItemSelect: ElementRef<HTMLOListElement> = null;
  private _transformer = (node: TodoItemNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id,
      code: node.code
    };
  }

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
  treeControl: FlatTreeControl<TodoItemFlatNode>;
  TREE_DATA: any[];
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);
  constructor() {
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.treeFlattener = new MatTreeFlattener(this._transformer, this.getLevel, this.isExpandable, this.getChildren,);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  };

  checkIfClickedOutside = e => {
    if (this.openPopper
      && !this.ItemSelectAll?.nativeElement?.contains(e.target)
      && !this.ListItemSelect?.nativeElement?.contains(e.target)) {
      this.openPopper = false;
      document.removeEventListener('mousedown', this.checkIfClickedOutside);
    }
  };

  onOpenPopper() {
    if (!this.openPopper) {
      this.openPopper = true;
      document.addEventListener('mousedown', this.checkIfClickedOutside);
    }
  };

  getNodes(item) {
    return this.treeControl?.dataNodes?.find(e => e?.id === item?.id)
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
    this.selected.emit(this.checklistSelection.selected);
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }
  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
  checkAll() {
    this.checklistSelection.clear();
    for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
      if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i]))
        this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
      this.treeControl.expand(this.treeControl.dataNodes[i])
    }
    this.selected.emit(this.checklistSelection.selected);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.TREE_DATA = changes.data.currentValue as any[];
    this.dataSource.data = this.TREE_DATA;
    this.checkAll();
  }
}
