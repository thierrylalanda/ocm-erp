import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Nœud de l'arbre
 */
export interface TreeNode {
    /** ID unique */
    id: string | number;
    /** Libellé */
    label: string;
    /** Icône */
    icon?: string;
    /** Enfants */
    children?: TreeNode[];
    /** Données personnalisées */
    data?: any;
    /** Nœud développé */
    expanded?: boolean;
    /** Nœud sélectionné */
    selected?: boolean;
    /** Nœud désactivé */
    disabled?: boolean;
    /** Classe CSS personnalisée */
    customClass?: string;
}

/**
 * Configuration du TreeView
 */
export interface TreeViewConfig {
    /** Autoriser la sélection */
    selectable?: boolean;
    /** Sélection multiple */
    multiSelect?: boolean;
    /** Afficher les icônes */
    showIcons?: boolean;
    /** Afficher les lignes de connexion */
    showLines?: boolean;
    /** Développer tous les nœuds par défaut */
    expandAll?: boolean;
    /** Activer le drag & drop */
    draggable?: boolean;
    /** Afficher les actions */
    showActions?: boolean;
}

/**
 * Composant TreeView - Arbre hiérarchique
 * 
 * Features:
 * - Affichage hiérarchique
 * - Expand/collapse
 * - Sélection simple/multiple
 * - Icônes personnalisées
 * - Actions par nœud
 * - Recherche
 * - Drag & drop (optionnel)
 * 
 * @example
 * ```html
 * <app-tree-view
 *   [nodes]="treeData"
 *   [config]="treeConfig"
 *   (nodeSelected)="onNodeSelected($event)"
 *   (nodeExpanded)="onNodeExpanded($event)">
 * </app-tree-view>
 * ```
 */
@Component({
    selector: 'app-tree-view',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
    /** Nœuds de l'arbre */
    @Input() nodes: TreeNode[] = [];

    /** Configuration */
    @Input() config: TreeViewConfig = {
        selectable: true,
        multiSelect: false,
        showIcons: true,
        showLines: true,
        expandAll: false,
        draggable: false,
        showActions: false
    };

    /** Événement de sélection */
    @Output() nodeSelected = new EventEmitter<TreeNode>();

    /** Événement d'expansion */
    @Output() nodeExpanded = new EventEmitter<TreeNode>();

    /** Événement de collapse */
    @Output() nodeCollapsed = new EventEmitter<TreeNode>();

    /** Événement d'action */
    @Output() nodeAction = new EventEmitter<{ node: TreeNode; action: string }>();

    /** Nœuds sélectionnés */
    selectedNodes: TreeNode[] = [];

    ngOnInit(): void {
        if (this.config.expandAll) {
            this.expandAllNodes(this.nodes);
        }
    }

    /**
     * Développer/réduire un nœud
     */
    toggleNode(node: TreeNode): void {
        if (node.children && node.children.length > 0) {
            node.expanded = !node.expanded;

            if (node.expanded) {
                this.nodeExpanded.emit(node);
            } else {
                this.nodeCollapsed.emit(node);
            }
        }
    }

    /**
     * Sélectionner un nœud
     */
    selectNode(node: TreeNode, event?: Event): void {
        if (node.disabled || !this.config.selectable) return;

        if (event) {
            event.stopPropagation();
        }

        if (this.config.multiSelect) {
            // Sélection multiple
            node.selected = !node.selected;

            if (node.selected) {
                this.selectedNodes.push(node);
            } else {
                const index = this.selectedNodes.indexOf(node);
                if (index > -1) {
                    this.selectedNodes.splice(index, 1);
                }
            }
        } else {
            // Sélection simple - désélectionner tous les autres
            this.deselectAll(this.nodes);
            node.selected = true;
            this.selectedNodes = [node];
        }

        this.nodeSelected.emit(node);
    }

    /**
     * Désélectionner tous les nœuds
     */
    private deselectAll(nodes: TreeNode[]): void {
        nodes.forEach(node => {
            node.selected = false;
            if (node.children) {
                this.deselectAll(node.children);
            }
        });
        this.selectedNodes = [];
    }

    /**
     * Développer tous les nœuds
     */
    private expandAllNodes(nodes: TreeNode[]): void {
        nodes.forEach(node => {
            if (node.children && node.children.length > 0) {
                node.expanded = true;
                this.expandAllNodes(node.children);
            }
        });
    }

    /**
     * Réduire tous les nœuds
     */
    collapseAll(): void {
        this.collapseAllNodes(this.nodes);
    }

    private collapseAllNodes(nodes: TreeNode[]): void {
        nodes.forEach(node => {
            node.expanded = false;
            if (node.children) {
                this.collapseAllNodes(node.children);
            }
        });
    }

    /**
     * Développer tous les nœuds
     */
    expandAll(): void {
        this.expandAllNodes(this.nodes);
    }

    /**
     * Obtenir les nœuds sélectionnés
     */
    getSelectedNodes(): TreeNode[] {
        return this.selectedNodes;
    }

    /**
     * Vérifier si un nœud a des enfants
     */
    hasChildren(node: TreeNode): boolean {
        return !!(node.children && node.children.length > 0);
    }

    /**
     * Gérer une action sur un nœud
     */
    onAction(node: TreeNode, action: string, event: Event): void {
        event.stopPropagation();
        this.nodeAction.emit({ node, action });
    }

    /**
     * Rechercher dans l'arbre
     */
    search(query: string): TreeNode[] {
        if (!query) return [];

        const results: TreeNode[] = [];
        this.searchNodes(this.nodes, query.toLowerCase(), results);
        return results;
    }

    private searchNodes(nodes: TreeNode[], query: string, results: TreeNode[]): void {
        nodes.forEach(node => {
            if (node.label.toLowerCase().includes(query)) {
                results.push(node);
            }
            if (node.children) {
                this.searchNodes(node.children, query, results);
            }
        });
    }
}
