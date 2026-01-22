import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NAWYXTZ5.js";
import {
  AuthService,
  ToasterService
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import {
  HttpClient
} from "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  Injectable,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/notifications/application/services/notification.service.ts
var NotificationService = class _NotificationService {
  baseUrl = environment.api + "notification/notifications";
  authService = inject(AuthService);
  http = inject(HttpClient);
  /**
   * Récupère les notifications de l'utilisateur courant avec pagination et filtres
   */
  getNotifications(filters = {}) {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }
    const params = {
      destinataireId: user.id.toString(),
      page: filters.page?.toString() || "0",
      size: filters.size?.toString() || "20",
      sort: filters.sort || "nsDateCreation,desc"
    };
    if (filters.statut)
      params.statut = filters.statut;
    if (filters.canal)
      params.canal = filters.canal;
    if (filters.type)
      params.type = filters.type;
    if (filters.priorite)
      params.priorite = filters.priorite;
    if (filters.dateDebut)
      params.dateDebut = filters.dateDebut;
    if (filters.dateFin)
      params.dateFin = filters.dateFin;
    return this.http.get(this.baseUrl, { params });
  }
  /**
   * Récupère une notification par son ID
   */
  getNotification(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Marque une notification comme lue
   */
  markAsRead(id) {
    return this.http.patch(`${this.baseUrl}/${id}/read`, {});
  }
  /**
   * Marque plusieurs notifications comme lues
   */
  markMultipleAsRead(ids) {
    return this.http.patch(`${this.baseUrl}/batch-read`, { ids });
  }
  /**
   * Marque toutes les notifications de l'utilisateur comme lues
   */
  markAllAsRead() {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }
    return this.http.patch(`${this.baseUrl}/mark-all-read`, {
      destinataireId: user.id
    });
  }
  /**
   * Supprime une notification
   */
  deleteNotification(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  /**
   * Supprime plusieurs notifications
   */
  deleteMultipleNotifications(ids) {
    return this.http.post(`${this.baseUrl}/batch-delete`, { ids });
  }
  /**
   * Récupère les statistiques des notifications de l'utilisateur
   */
  getNotificationStats() {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }
    return this.http.get(`${this.baseUrl}/stats`, {
      params: { destinataireId: user.id.toString() }
    });
  }
  /**
   * Récupère le nombre de notifications non lues
   */
  getUnreadCount() {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }
    return this.http.get(`${this.baseUrl}/unread-count`, {
      params: { destinataireId: user.id.toString() }
    });
  }
  /**
   * Récupère les options pour les types de notifications
   */
  getNotificationTypeOptions() {
    return [
      { value: "NOUVEAU_TICKET", label: "Nouveau ticket" },
      { value: "TICKET_MODIFIE", label: "Ticket modifi\xE9" },
      { value: "TICKET_RESOLU", label: "Ticket r\xE9solu" },
      { value: "NOUVELLE_PLAINTE", label: "Nouvelle plainte" },
      { value: "PLAINTE_MODIFIEE", label: "Plainte modifi\xE9e" },
      { value: "PLAINTE_RESOLUE", label: "Plainte r\xE9solue" },
      { value: "NOUVEAU_MESSAGE", label: "Nouveau message" },
      { value: "RAPPEL", label: "Rappel" },
      { value: "ALERTE", label: "Alerte" },
      { value: "AUTRE", label: "Autre" }
    ];
  }
  /**
   * Récupère les options pour les priorités
   */
  getPriorityOptions() {
    return [
      { value: "INFO", label: "Information", color: "primary" },
      { value: "WARNING", label: "Avertissement", color: "warning" },
      { value: "ERROR", label: "Erreur", color: "danger" },
      { value: "CRITICAL", label: "Critique", color: "dark" }
    ];
  }
  /**
   * Récupère les options pour les canaux
   */
  getChannelOptions() {
    return [
      { value: "EMAIL", label: "Email", icon: "isax isax-sms" },
      { value: "SMS", label: "SMS", icon: "isax isax-message" },
      { value: "NOTIFICATION_INTERNE", label: "Notification interne", icon: "isax isax-notification" },
      { value: "WHATSAPP", label: "WhatsApp", icon: "isax isax-whatsapp" }
    ];
  }
  /**
   * Récupère les options pour les statuts
   */
  getStatusOptions() {
    return [
      { value: "EN_ATTENTE", label: "En attente", badgeClass: "badge-soft-warning" },
      { value: "ENVOYE", label: "Envoy\xE9", badgeClass: "badge-soft-info" },
      { value: "DELIVRE", label: "D\xE9livr\xE9", badgeClass: "badge-soft-primary" },
      { value: "LU", label: "Lu", badgeClass: "badge-soft-success" },
      { value: "ECHEC", label: "\xC9chec", badgeClass: "badge-soft-danger" }
    ];
  }
  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 1) {
      return "\xC0 l'instant";
    } else if (diffMins < 60) {
      return `Il y a ${diffMins} min`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} h`;
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} j`;
    } else {
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  }
  /**
   * Obtient l'icône en fonction du type de notification
   */
  getNotificationIcon(type) {
    const icons = {
      "NOUVEAU_TICKET": "isax isax-ticket",
      "TICKET_MODIFIE": "isax isax-edit",
      "TICKET_RESOLU": "isax isax-tick-circle",
      "NOUVELLE_PLAINTE": "isax isax-danger",
      "PLAINTE_MODIFIEE": "isax isax-edit-2",
      "PLAINTE_RESOLUE": "isax isax-tick-circle",
      "NOUVEAU_MESSAGE": "isax isax-message",
      "RAPPEL": "isax isax-calendar",
      "ALERTE": "isax isax-notification",
      "AUTRE": "isax isax-info-circle"
    };
    return icons[type] || "isax isax-info-circle";
  }
  /**
   * Obtient la couleur en fonction de la priorité
   */
  getPriorityColor(priority) {
    const colors = {
      "INFO": "primary",
      "WARNING": "warning",
      "ERROR": "danger",
      "CRITICAL": "dark"
    };
    return colors[priority] || "primary";
  }
  /**
   * Vérifie si une notification est récente (moins de 24h)
   */
  isRecentNotification(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = diffMs / 36e5;
    return diffHours < 24;
  }
  /**
   * Extrait le lien d'action à partir du message de notification
   */
  extractActionLink(notification) {
    if (notification.plainteId && notification.plainteNumero) {
      return `/complaints/${notification.plainteId}`;
    }
    switch (notification.nsType) {
      case "NOUVEAU_TICKET":
      case "TICKET_MODIFIE":
      case "TICKET_RESOLU":
        return "/tickets";
      case "NOUVELLE_PLAINTE":
      case "PLAINTE_MODIFIEE":
      case "PLAINTE_RESOLUE":
        return "/complaints";
      case "NOUVEAU_MESSAGE":
        return "/messages";
      default:
        return null;
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/notifications/notifications.component.ts
function NotificationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 46)(4, "div", 47)(5, "div", 48);
    \u0275\u0275element(6, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "p", 50);
    \u0275\u0275text(9, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 2);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(12, "div", 44)(13, "div", 45)(14, "div", 46)(15, "div", 47)(16, "div", 51);
    \u0275\u0275element(17, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "p", 50);
    \u0275\u0275text(20, "Non lues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4", 2);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 44)(24, "div", 45)(25, "div", 46)(26, "div", 47)(27, "div", 53);
    \u0275\u0275element(28, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "p", 50);
    \u0275\u0275text(31, "Lues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h4", 2);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(34, "div", 44)(35, "div", 45)(36, "div", 46)(37, "div", 47)(38, "div", 55);
    \u0275\u0275element(39, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "p", 50);
    \u0275\u0275text(42, "\xC9checs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h4", 2);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.total || 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.nonLues || ctx_r0.unreadCount);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.lues || 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.echecs || 0);
  }
}
function NotificationsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function NotificationsComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.error = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function NotificationsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function NotificationsComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.success = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.success, " ");
  }
}
function NotificationsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div");
    \u0275\u0275element(3, "i", 64);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "button", 65);
    \u0275\u0275listener("click", function NotificationsComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markSelectedAsRead());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275text(9, "Marquer comme lu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275listener("click", function NotificationsComponent_div_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openDeleteModal());
    });
    \u0275\u0275element(11, "i", 67);
    \u0275\u0275text(12, "Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedNotifications.size, " notification(s) s\xE9lectionn\xE9e(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.processing);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.processing);
  }
}
function NotificationsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "span", 70);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "Chargement des notifications...");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 24);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 75);
    \u0275\u0275text(4, "Aucune notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6, "Vous n'avez aucune notification pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_17_div_2_tr_21_a_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 101);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.getActionLink(notification_r7));
  }
}
function NotificationsComponent_div_17_div_2_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 80)(3, "input", 81);
    \u0275\u0275listener("change", function NotificationsComponent_div_17_div_2_tr_21_Template_input_change_3_listener() {
      const notification_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelection(notification_r7.id));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 87);
    \u0275\u0275element(6, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 88)(9, "strong", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 89);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 90)(14, "small", 89);
    \u0275\u0275element(15, "i", 91);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 92);
    \u0275\u0275element(18, "i", 93);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "td")(21, "span", 94);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "div", 47);
    \u0275\u0275element(25, "i");
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "td")(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td")(32, "small", 89);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td")(35, "div", 95)(36, "button", 96);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_2_tr_21_Template_button_click_36_listener($event) {
      const notification_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notification_r7, $event));
    });
    \u0275\u0275element(37, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, NotificationsComponent_div_17_div_2_tr_21_a_38_Template, 2, 1, "a", 98);
    \u0275\u0275elementStart(39, "button", 99);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_2_tr_21_Template_button_click_39_listener($event) {
      const notification_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteNotification(notification_r7, $event));
    });
    \u0275\u0275element(40, "i", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const notification_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-primary", notification_r7.nsStatut !== "LU")("bg-light", ctx_r0.isRecentNotification(notification_r7.nsDateCreation));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.selectedNotifications.has(notification_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bg-light-" + ctx_r0.getPriorityColor(notification_r7.nsPriorite));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getNotificationIcon(notification_r7.nsType) + " text-" + ctx_r0.getPriorityColor(notification_r7.nsPriorite));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notification_r7.nsTitre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r7.nsMessage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", notification_r7.destinataireNom, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", notification_r7.destinataireEmail, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getTypeText(notification_r7.nsType));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getChannelIcon(notification_r7.nsCanal) + " me-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getChannelText(notification_r7.nsCanal));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r0.getStatusBadgeClass(notification_r7.nsStatut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(notification_r7.nsStatut), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(notification_r7.nsDateCreation));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", notification_r7.nsStatut === "LU" || ctx_r0.processing);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getActionLink(notification_r7));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.processing);
  }
}
function NotificationsComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "table", 78)(2, "thead")(3, "tr")(4, "th", 79)(5, "div", 80)(6, "input", 81);
    \u0275\u0275listener("change", function NotificationsComponent_div_17_div_2_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelectAll());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "th", 82);
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 83);
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 83);
    \u0275\u0275text(13, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 83);
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 84);
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 85);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, NotificationsComponent_div_17_div_2_tr_21_Template, 41, 23, "tr", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r0.selectedNotifications.size === ctx_r0.notifications.length);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function NotificationsComponent_div_17_div_3_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 105)(1, "a", 106);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_3_li_10_Template_a_click_1_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.changePage(page_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r10 === ctx_r0.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10 + 1);
  }
}
function NotificationsComponent_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div")(2, "small", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "nav")(6, "ul", 104)(7, "li", 105)(8, "a", 106);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_3_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(9, "i", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, NotificationsComponent_div_17_div_3_li_10_Template, 3, 3, "li", 108);
    \u0275\u0275elementStart(11, "li", 105)(12, "a", 106);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_3_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(13, "i", 109);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Affichage de ", ctx_r0.currentPage * ctx_r0.pageSize + 1, " \xE0 ", ctx_r0.min((ctx_r0.currentPage + 1) * ctx_r0.pageSize, ctx_r0.totalElements), " sur ", ctx_r0.totalElements, " notifications ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled", ctx_r0.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.getPages());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r0.currentPage === ctx_r0.totalPages - 1);
  }
}
function NotificationsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NotificationsComponent_div_17_div_1_Template, 7, 0, "div", 12)(2, NotificationsComponent_div_17_div_2_Template, 22, 2, "div", 72)(3, NotificationsComponent_div_17_div_3_Template, 14, 8, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
  }
}
function NotificationsComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r11.label);
  }
}
function NotificationsComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    \u0275\u0275property("value", option_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r12.label);
  }
}
function NotificationsComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    \u0275\u0275property("value", option_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r13.label);
  }
}
function NotificationsComponent_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    \u0275\u0275property("value", option_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r14.label);
  }
}
function NotificationsComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function NotificationsComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  notificationService = inject(NotificationService);
  authService = inject(AuthService);
  toasterService = inject(ToasterService);
  subscriptions = [];
  // États
  loading = false;
  loadingStats = false;
  processing = false;
  error = null;
  success = null;
  // Données
  notifications = [];
  selectedNotifications = /* @__PURE__ */ new Set();
  stats = null;
  unreadCount = 0;
  // Pagination
  currentPage = 0;
  pageSize = 20;
  totalElements = 0;
  totalPages = 0;
  // Filtres
  filters = {
    page: 0,
    size: 20,
    sort: "nsDateCreation,desc"
  };
  // Options de filtres
  typeOptions = this.notificationService.getNotificationTypeOptions();
  priorityOptions = this.notificationService.getPriorityOptions();
  channelOptions = this.notificationService.getChannelOptions();
  statusOptions = this.notificationService.getStatusOptions();
  // Filtres actifs
  activeFilters = {};
  // Modal
  showFiltersModal = false;
  showDeleteModal = false;
  showMarkAllModal = false;
  ngOnInit() {
    this.loadNotifications();
    this.loadStats();
    this.loadUnreadCount();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  /**
   * Charge les notifications avec les filtres actuels
   */
  loadNotifications() {
    this.loading = true;
    this.error = null;
    const sub = this.notificationService.getNotifications(this.filters).subscribe({
      next: (response) => {
        this.notifications = response.content;
        this.currentPage = response.page;
        this.pageSize = response.size;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        this.loading = false;
        this.selectedNotifications.clear();
      },
      error: (error) => {
        console.error("Erreur lors du chargement des notifications:", error);
        this.error = error.message || "Erreur lors du chargement des notifications";
        this.loading = false;
        if (this.error) {
          this.toasterService.typeError(this.error);
        }
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Charge les statistiques
   */
  loadStats() {
    this.loadingStats = true;
    const sub = this.notificationService.getNotificationStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.loadingStats = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des statistiques:", error);
        this.loadingStats = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Charge le nombre de notifications non lues
   */
  loadUnreadCount() {
    const sub = this.notificationService.getUnreadCount().subscribe({
      next: (response) => {
        this.unreadCount = response.count;
      },
      error: (error) => {
        console.error("Erreur lors du chargement du nombre de notifications non lues:", error);
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Applique les filtres
   */
  applyFilters() {
    this.filters = __spreadProps(__spreadValues(__spreadValues({}, this.filters), this.activeFilters), {
      page: 0
      // Retour à la première page
    });
    this.loadNotifications();
    this.closeFiltersModal();
  }
  /**
   * Réinitialise les filtres
   */
  resetFilters() {
    this.activeFilters = {};
    this.filters = {
      page: 0,
      size: 20,
      sort: "nsDateCreation,desc"
    };
    this.loadNotifications();
    this.closeFiltersModal();
  }
  /**
   * Change de page
   */
  changePage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.filters.page = page;
      this.loadNotifications();
    }
  }
  /**
   * Sélectionne/désélectionne une notification
   */
  toggleSelection(id) {
    if (this.selectedNotifications.has(id)) {
      this.selectedNotifications.delete(id);
    } else {
      this.selectedNotifications.add(id);
    }
  }
  /**
   * Sélectionne/désélectionne toutes les notifications
   */
  toggleSelectAll() {
    if (this.selectedNotifications.size === this.notifications.length) {
      this.selectedNotifications.clear();
    } else {
      this.notifications.forEach((notification) => {
        this.selectedNotifications.add(notification.id);
      });
    }
  }
  /**
   * Marque une notification comme lue
   */
  markAsRead(notification, event) {
    if (event)
      event.stopPropagation();
    if (notification.nsStatut === "LU")
      return;
    this.processing = true;
    const sub = this.notificationService.markAsRead(notification.id).subscribe({
      next: (response) => {
        notification.nsStatut = response.nsStatut;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
        this.toasterService.typeSuccess("Notification marqu\xE9e comme lue");
        this.processing = false;
      },
      error: (error) => {
        console.error("Erreur lors du marquage comme lu:", error);
        this.toasterService.typeError("Erreur lors du marquage comme lu");
        this.processing = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Marque les notifications sélectionnées comme lues
   */
  markSelectedAsRead() {
    if (this.selectedNotifications.size === 0)
      return;
    const ids = Array.from(this.selectedNotifications);
    this.processing = true;
    const sub = this.notificationService.markMultipleAsRead(ids).subscribe({
      next: (responses) => {
        responses.forEach((response) => {
          const notification = this.notifications.find((n) => n.id === response.id);
          if (notification) {
            notification.nsStatut = response.nsStatut;
          }
        });
        this.unreadCount = Math.max(0, this.unreadCount - ids.length);
        this.selectedNotifications.clear();
        this.toasterService.typeSuccess(`${ids.length} notification(s) marqu\xE9e(s) comme lue(s)`);
        this.processing = false;
      },
      error: (error) => {
        console.error("Erreur lors du marquage multiple comme lu:", error);
        this.toasterService.typeError("Erreur lors du marquage comme lu");
        this.processing = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Marque toutes les notifications comme lues
   */
  markAllAsRead() {
    this.processing = true;
    const sub = this.notificationService.markAllAsRead().subscribe({
      next: (response) => {
        this.notifications.forEach((notification) => {
          if (notification.nsStatut !== "LU") {
            notification.nsStatut = "LU";
          }
        });
        this.unreadCount = 0;
        this.toasterService.typeSuccess(`${response.count} notification(s) marqu\xE9e(s) comme lue(s)`);
        this.processing = false;
        this.closeMarkAllModal();
      },
      error: (error) => {
        console.error("Erreur lors du marquage de toutes les notifications comme lues:", error);
        this.toasterService.typeError("Erreur lors du marquage comme lu");
        this.processing = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Supprime une notification
   */
  deleteNotification(notification, event) {
    if (event)
      event.stopPropagation();
    this.processing = true;
    const sub = this.notificationService.deleteNotification(notification.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter((n) => n.id !== notification.id);
        if (notification.nsStatut !== "LU") {
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        }
        this.totalElements--;
        this.toasterService.typeSuccess("Notification supprim\xE9e");
        this.processing = false;
      },
      error: (error) => {
        console.error("Erreur lors de la suppression:", error);
        this.toasterService.typeError("Erreur lors de la suppression");
        this.processing = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Supprime les notifications sélectionnées
   */
  deleteSelectedNotifications() {
    if (this.selectedNotifications.size === 0)
      return;
    const ids = Array.from(this.selectedNotifications);
    this.processing = true;
    const sub = this.notificationService.deleteMultipleNotifications(ids).subscribe({
      next: (response) => {
        this.notifications = this.notifications.filter((n) => !ids.includes(n.id));
        const deletedUnread = this.notifications.filter((n) => ids.includes(n.id) && n.nsStatut !== "LU").length;
        this.unreadCount = Math.max(0, this.unreadCount - deletedUnread);
        this.totalElements -= response.count;
        this.selectedNotifications.clear();
        this.toasterService.typeSuccess(`${response.count} notification(s) supprim\xE9e(s)`);
        this.processing = false;
        this.closeDeleteModal();
      },
      error: (error) => {
        console.error("Erreur lors de la suppression multiple:", error);
        this.toasterService.typeError("Erreur lors de la suppression");
        this.processing = false;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Ouvre le modal de filtres
   */
  openFiltersModal() {
    this.showFiltersModal = true;
  }
  /**
   * Ferme le modal de filtres
   */
  closeFiltersModal() {
    this.showFiltersModal = false;
  }
  /**
   * Ouvre le modal de confirmation de suppression
   */
  openDeleteModal() {
    if (this.selectedNotifications.size === 0) {
      this.toasterService.typeWarning("Veuillez s\xE9lectionner au moins une notification");
      return;
    }
    this.showDeleteModal = true;
  }
  /**
   * Ferme le modal de confirmation de suppression
   */
  closeDeleteModal() {
    this.showDeleteModal = false;
  }
  /**
   * Ouvre le modal de confirmation pour marquer toutes comme lues
   */
  openMarkAllModal() {
    this.showMarkAllModal = true;
  }
  /**
   * Ferme le modal de confirmation pour marquer toutes comme lues
   */
  closeMarkAllModal() {
    this.showMarkAllModal = false;
  }
  /**
   * Obtient l'icône pour un type de notification
   */
  getNotificationIcon(type) {
    return this.notificationService.getNotificationIcon(type);
  }
  /**
   * Obtient la couleur pour une priorité
   */
  getPriorityColor(priority) {
    return this.notificationService.getPriorityColor(priority);
  }
  /**
   * Formate une date
   */
  formatDate(dateString) {
    return this.notificationService.formatDate(dateString);
  }
  /**
   * Vérifie si une notification est récente
   */
  isRecentNotification(dateString) {
    return this.notificationService.isRecentNotification(dateString);
  }
  /**
   * Obtient le lien d'action pour une notification
   */
  getActionLink(notification) {
    return this.notificationService.extractActionLink(notification);
  }
  /**
   * Obtient le texte du badge de statut
   */
  getStatusText(status) {
    const option = this.statusOptions.find((opt) => opt.value === status);
    return option ? option.label : status;
  }
  /**
   * Obtient la classe CSS du badge de statut
   */
  getStatusBadgeClass(status) {
    const option = this.statusOptions.find((opt) => opt.value === status);
    return option ? option.badgeClass : "badge-soft-secondary";
  }
  /**
   * Obtient le texte du type de notification
   */
  getTypeText(type) {
    const option = this.typeOptions.find((opt) => opt.value === type);
    return option ? option.label : type;
  }
  /**
   * Obtient le texte du canal
   */
  getChannelText(channel) {
    const option = this.channelOptions.find((opt) => opt.value === channel);
    return option ? option.label : channel;
  }
  /**
   * Obtient l'icône du canal
   */
  getChannelIcon(channel) {
    const option = this.channelOptions.find((opt) => opt.value === channel);
    return option ? option.icon : "isax isax-info-circle";
  }
  /**
   * Calcule les pages à afficher dans la pagination
   */
  getPages() {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  /**
   * Utilitaire pour Math.min dans le template
   */
  min(a, b) {
    return Math.min(a, b);
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 110, vars: 46, consts: [[1, ""], [1, "pb-3", "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3"], [1, "mb-0"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "isax", "isax-filter", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-tick-circle", "me-1"], ["class", "row mb-4", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-info alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "mb-0", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close", 3, "click"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", 1, "btn", "btn-outline-white", 3, "click"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/notification-check.svg", "alt", "Marquer toutes comme lues"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-white", "me-3", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["src", "assets/img/icons/delete.svg", "alt", "Suppression"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "row", "mb-4"], [1, "col-md-3", "col-sm-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "bg-light-primary", "me-3", "p-2"], [1, "isax", "isax-notification", "fs-24", "text-primary"], [1, "text-gray-9", "fw-medium", "mb-0"], [1, "avatar", "avatar-lg", "bg-light-warning", "me-3", "p-2"], [1, "isax", "isax-notification-1", "fs-24", "text-warning"], [1, "avatar", "avatar-lg", "bg-light-success", "me-3", "p-2"], [1, "isax", "isax-tick-circle", "fs-24", "text-success"], [1, "avatar", "avatar-lg", "bg-light-danger", "me-3", "p-2"], [1, "isax", "isax-danger", "fs-24", "text-danger"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-danger", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["role", "alert", 1, "alert", "alert-info", "alert-dismissible", "fade", "show", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-info-circle", "me-2"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled"], [1, "isax", "isax-trash", "me-1"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], ["src", "assets/img/icons/notification.svg", "alt", "Aucune notification", 1, "img-fluid", 2, "max-width", "100px"], [1, "mb-2"], [1, "text-muted", "mb-4"], [1, "table-responsive"], [1, "table", "table-hover"], ["width", "50"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], ["width", "60"], ["width", "120"], ["width", "150"], ["width", "100"], [3, "table-primary", "bg-light", 4, "ngFor", "ngForOf"], [1, "avatar", "avatar-sm", 3, "ngClass"], [1, "d-flex", "flex-column"], [1, "text-muted"], [1, "mt-1"], [1, "isax", "isax-user", "me-1"], [1, "text-muted", "ms-3"], [1, "isax", "isax-sms", "me-1"], [1, "badge", "badge-soft-primary"], [1, "d-flex", "gap-1"], ["type", "button", "title", "Marquer comme lu", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "disabled"], [1, "isax", "isax-tick-circle"], ["class", "btn btn-sm btn-outline-info", "title", "Voir les d\xE9tails", 3, "routerLink", 4, "ngIf"], ["type", "button", "title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "isax", "isax-trash"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-info", 3, "routerLink"], [1, "isax", "isax-eye"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_6_listener() {
        return ctx.openFiltersModal();
      });
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275text(8, "Filtres ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_9_listener() {
        return ctx.openMarkAllModal();
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Tout marquer comme lu ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, NotificationsComponent_div_12_Template, 45, 4, "div", 8)(13, NotificationsComponent_div_13_Template, 4, 1, "div", 9)(14, NotificationsComponent_div_14_Template, 4, 1, "div", 10)(15, NotificationsComponent_div_15_Template, 13, 3, "div", 11)(16, NotificationsComponent_div_16_Template, 6, 0, "div", 12)(17, NotificationsComponent_div_17_Template, 4, 3, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "h4", 18);
      \u0275\u0275text(23, "Filtrer les notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 19);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_24_listener() {
        return ctx.closeFiltersModal();
      });
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "label", 25);
      \u0275\u0275text(31, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.type, $event) || (ctx.activeFilters.type = $event);
        return $event;
      });
      \u0275\u0275elementStart(33, "option", 27);
      \u0275\u0275text(34, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, NotificationsComponent_option_35_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "label", 25);
      \u0275\u0275text(39, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.statut, $event) || (ctx.activeFilters.statut = $event);
        return $event;
      });
      \u0275\u0275elementStart(41, "option", 27);
      \u0275\u0275text(42, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, NotificationsComponent_option_43_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 23)(45, "div", 24)(46, "label", 25);
      \u0275\u0275text(47, "Canal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.canal, $event) || (ctx.activeFilters.canal = $event);
        return $event;
      });
      \u0275\u0275elementStart(49, "option", 27);
      \u0275\u0275text(50, "Tous les canaux");
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, NotificationsComponent_option_51_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 23)(53, "div", 24)(54, "label", 25);
      \u0275\u0275text(55, "Priorit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.priorite, $event) || (ctx.activeFilters.priorite = $event);
        return $event;
      });
      \u0275\u0275elementStart(57, "option", 27);
      \u0275\u0275text(58, "Toutes les priorit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(59, NotificationsComponent_option_59_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 23)(61, "div", 24)(62, "label", 25);
      \u0275\u0275text(63, "Date de d\xE9but");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.dateDebut, $event) || (ctx.activeFilters.dateDebut = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 23)(66, "div", 24)(67, "label", 25);
      \u0275\u0275text(68, "Date de fin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeFilters.dateFin, $event) || (ctx.activeFilters.dateFin = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(70, "div", 30)(71, "button", 31);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_71_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(72, "R\xE9initialiser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 32)(74, "button", 31);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_74_listener() {
        return ctx.closeFiltersModal();
      });
      \u0275\u0275text(75, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 33);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_76_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(77, "Appliquer");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(78, "div", 14)(79, "div", 34)(80, "div", 16)(81, "div", 35)(82, "div", 24);
      \u0275\u0275element(83, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "h6", 37);
      \u0275\u0275text(85, "Marquer toutes comme lues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 24);
      \u0275\u0275text(87, " \xCAtes-vous s\xFBr de vouloir marquer toutes les notifications comme lues ? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 38)(89, "button", 39);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_89_listener() {
        return ctx.closeMarkAllModal();
      });
      \u0275\u0275text(90, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "button", 6);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_91_listener() {
        return ctx.markAllAsRead();
      });
      \u0275\u0275template(92, NotificationsComponent_span_92_Template, 1, 0, "span", 40);
      \u0275\u0275text(93, " Confirmer ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(94, "div", 14)(95, "div", 34)(96, "div", 16)(97, "div", 35)(98, "div", 24);
      \u0275\u0275element(99, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h6", 37);
      \u0275\u0275text(101, "Supprimer les notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p", 24);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 38)(105, "button", 39);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_105_listener() {
        return ctx.closeDeleteModal();
      });
      \u0275\u0275text(106, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 42);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_107_listener() {
        return ctx.deleteSelectedNotifications();
      });
      \u0275\u0275template(108, NotificationsComponent_span_108_Template, 1, 0, "span", 40);
      \u0275\u0275text(109, " Supprimer ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.unreadCount === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingStats && ctx.stats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedNotifications.size > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showFiltersModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showFiltersModal)("d-block", ctx.showFiltersModal);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.type);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.typeOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.statut);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.canal);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.channelOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.priorite);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.priorityOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.dateDebut);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeFilters.dateFin);
      \u0275\u0275advance(9);
      \u0275\u0275styleProp("display", ctx.showMarkAllModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showMarkAllModal)("d-block", ctx.showMarkAllModal);
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.processing);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.showDeleteModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showDeleteModal)("d-block", ctx.showDeleteModal);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" \xCAtes-vous s\xFBr de vouloir supprimer ", ctx.selectedNotifications.size, " notification(s) s\xE9lectionn\xE9e(s) ? ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.processing);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.notifications-container[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  border-left: 3px solid var(--bs-primary);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-item.recent[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-info[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-warning[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-error[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-critical[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-dark-rgb), 0.1);\n  color: var(--bs-dark);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge.status-en-attente[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge.status-envoye[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-info-rgb), 0.1);\n  color: var(--bs-info);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge.status-delivre[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge.status-lu[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-success-rgb), 0.1);\n  color: var(--bs-success);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-badge.status-echec[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.notification-item[_ngcontent-%COMP%]:hover   .notifications-container[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.notifications-container[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.notifications-container[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.notifications-container[_ngcontent-%COMP%]   .filters-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container[_ngcontent-%COMP%]   .filters-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--bs-border-color);\n  padding: 1.5rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .filters-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--bs-heading-color);\n}\n.notifications-container[_ngcontent-%COMP%]   .filters-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .filters-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--bs-border-color);\n  padding: 1rem 1.5rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .confirmation-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container[_ngcontent-%COMP%]   .confirmation-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .confirmation-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80px;\n  margin: 0 auto 1.5rem;\n}\n.notifications-container[_ngcontent-%COMP%]   .confirmation-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--bs-heading-color);\n}\n.notifications-container[_ngcontent-%COMP%]   .confirmation-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bs-secondary-color);\n  margin-bottom: 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0);\n  }\n}\n@media (max-width: 768px) {\n  .notifications-container[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .notifications-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-centered[_ngcontent-%COMP%] {\n    min-height: calc(100% - 1rem);\n  }\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.15);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-info[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-warning[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-error[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-icon.priority-critical[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-dark-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-badge.status-en-attente[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-badge.status-envoye[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-info-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-badge.status-delivre[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-badge.status-lu[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-success-rgb), 0.2);\n}\n[data-bs-theme=dark][_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notification-badge.status-echec[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n/*# sourceMappingURL=notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", imports: [CommonModule, FormsModule, RouterModule], template: `<div class="">
    <div>
        <!-- En-t\xEAte avec statistiques -->
        <div class="pb-3 d-flex align-items-center justify-content-between border-bottom mb-3">
            <h6 class="mb-0">Notifications</h6>
            <div class="d-flex align-items-center gap-2">
                <button type="button" class="btn btn-outline-primary" (click)="openFiltersModal()">
                    <i class="isax isax-filter me-1"></i>Filtres
                </button>
                <button type="button" class="btn btn-primary" (click)="openMarkAllModal()" [disabled]="unreadCount === 0">
                    <i class="isax isax-tick-circle me-1"></i>Tout marquer comme lu
                </button>
            </div>
        </div>

        <!-- Statistiques -->
        <div *ngIf="!loadingStats && stats" class="row mb-4">
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-primary me-3 p-2">
                                <i class="isax isax-notification fs-24 text-primary"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Total</p>
                                <h4 class="mb-0">{{ stats.total || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-warning me-3 p-2">
                                <i class="isax isax-notification-1 fs-24 text-warning"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Non lues</p>
                                <h4 class="mb-0">{{ stats.nonLues || unreadCount }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-success me-3 p-2">
                                <i class="isax isax-tick-circle fs-24 text-success"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Lues</p>
                                <h4 class="mb-0">{{ stats.lues || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-danger me-3 p-2">
                                <i class="isax isax-danger fs-24 text-danger"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">\xC9checs</p>
                                <h4 class="mb-0">{{ stats.echecs || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Messages d'alerte -->
        <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="isax isax-danger me-2"></i>{{ error }}
            <button type="button" class="btn-close" (click)="error = null"></button>
        </div>

        <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="isax isax-tick-circle me-2"></i>{{ success }}
            <button type="button" class="btn-close" (click)="success = null"></button>
        </div>

        <!-- Actions en masse -->
        <div *ngIf="selectedNotifications.size > 0" class="alert alert-info alert-dismissible fade show mb-3" role="alert">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <i class="isax isax-info-circle me-2"></i>
                    <strong>{{ selectedNotifications.size }} notification(s) s\xE9lectionn\xE9e(s)</strong>
                </div>
                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-sm btn-success" (click)="markSelectedAsRead()" [disabled]="processing">
                        <i class="isax isax-tick-circle me-1"></i>Marquer comme lu
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" (click)="openDeleteModal()" [disabled]="processing">
                        <i class="isax isax-trash me-1"></i>Supprimer
                    </button>
                </div>
            </div>
        </div>

        <!-- Chargement -->
        <div *ngIf="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mt-2">Chargement des notifications...</p>
        </div>

        <!-- Liste des notifications -->
        <div *ngIf="!loading" class="mb-0">
            <!-- Message si aucune notification -->
            <div *ngIf="notifications.length === 0" class="text-center py-5">
                <div class="mb-3">
                    <img src="assets/img/icons/notification.svg" alt="Aucune notification" class="img-fluid" style="max-width: 100px;">
                </div>
                <h6 class="mb-2">Aucune notification</h6>
                <p class="text-muted mb-4">Vous n'avez aucune notification pour le moment.</p>
            </div>

            <!-- Tableau des notifications -->
            <div *ngIf="notifications.length > 0" class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="50">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" 
                                           [checked]="selectedNotifications.size === notifications.length"
                                           (change)="toggleSelectAll()">
                                </div>
                            </th>
                            <th width="60"></th>
                            <th>Notification</th>
                            <th width="120">Type</th>
                            <th width="120">Canal</th>
                            <th width="120">Statut</th>
                            <th width="150">Date</th>
                            <th width="100">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let notification of notifications" 
                            [class.table-primary]="notification.nsStatut !== 'LU'"
                            [class.bg-light]="isRecentNotification(notification.nsDateCreation)">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" 
                                           [checked]="selectedNotifications.has(notification.id)"
                                           (change)="toggleSelection(notification.id)">
                                </div>
                            </td>
                            <td>
                                <div class="avatar avatar-sm" [ngClass]="'bg-light-' + getPriorityColor(notification.nsPriorite)">
                                    <i [class]="getNotificationIcon(notification.nsType) + ' text-' + getPriorityColor(notification.nsPriorite)"></i>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-column">
                                    <strong class="mb-1">{{ notification.nsTitre }}</strong>
                                    <small class="text-muted">{{ notification.nsMessage }}</small>
                                    <div class="mt-1">
                                        <small class="text-muted">
                                            <i class="isax isax-user me-1"></i>
                                            {{ notification.destinataireNom }}
                                        </small>
                                        <small class="text-muted ms-3">
                                            <i class="isax isax-sms me-1"></i>
                                            {{ notification.destinataireEmail }}
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="badge badge-soft-primary">{{ getTypeText(notification.nsType) }}</span>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <i [class]="getChannelIcon(notification.nsCanal) + ' me-1'"></i>
                                    <span>{{ getChannelText(notification.nsCanal) }}</span>
                                </div>
                            </td>
                            <td>
                                <span [class]="'badge ' + getStatusBadgeClass(notification.nsStatut)">
                                    {{ getStatusText(notification.nsStatut) }}
                                </span>
                            </td>
                            <td>
                                <small class="text-muted">{{ formatDate(notification.nsDateCreation) }}</small>
                            </td>
                            <td>
                                <div class="d-flex gap-1">
                                    <button type="button" class="btn btn-sm btn-outline-primary" 
                                            (click)="markAsRead(notification, $event)"
                                            [disabled]="notification.nsStatut === 'LU' || processing"
                                            title="Marquer comme lu">
                                        <i class="isax isax-tick-circle"></i>
                                    </button>
                                    <a *ngIf="getActionLink(notification)" 
                                       [routerLink]="getActionLink(notification)"
                                       class="btn btn-sm btn-outline-info"
                                       title="Voir les d\xE9tails">
                                        <i class="isax isax-eye"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-outline-danger" 
                                            (click)="deleteNotification(notification, $event)"
                                            [disabled]="processing"
                                            title="Supprimer">
                                        <i class="isax isax-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div *ngIf="notifications.length > 0" class="d-flex justify-content-between align-items-center mt-3">
                <div>
                    <small class="text-muted">
                        Affichage de {{ (currentPage * pageSize) + 1 }} \xE0 {{ min((currentPage + 1) * pageSize, totalElements) }} sur {{ totalElements }} notifications
                    </small>
                </div>
                <div>
                    <nav>
                        <ul class="pagination pagination-sm mb-0">
                            <li class="page-item" [class.disabled]="currentPage === 0">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage - 1)">
                                    <i class="isax isax-arrow-left"></i>
                                </a>
                            </li>
                            <li *ngFor="let page of getPages()" class="page-item" [class.active]="page === currentPage">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(page)">{{ page + 1 }}</a>
                            </li>
                            <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage + 1)">
                                    <i class="isax isax-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de filtres -->
<div class="modal fade" [class.show]="showFiltersModal" [style.display]="showFiltersModal ? 'block' : 'none'" 
     [class.d-block]="showFiltersModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Filtrer les notifications</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" (click)="closeFiltersModal()" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <!-- Type de notification -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select class="form-select" [(ngModel)]="activeFilters.type">
                                <option [value]="undefined">Tous les types</option>
                                <option *ngFor="let option of typeOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Statut -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Statut</label>
                            <select class="form-select" [(ngModel)]="activeFilters.statut">
                                <option [value]="undefined">Tous les statuts</option>
                                <option *ngFor="let option of statusOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Canal -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Canal</label>
                            <select class="form-select" [(ngModel)]="activeFilters.canal">
                                <option [value]="undefined">Tous les canaux</option>
                                <option *ngFor="let option of channelOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Priorit\xE9 -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Priorit\xE9</label>
                            <select class="form-select" [(ngModel)]="activeFilters.priorite">
                                <option [value]="undefined">Toutes les priorit\xE9s</option>
                                <option *ngFor="let option of priorityOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Date de d\xE9but -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Date de d\xE9but</label>
                            <input type="date" class="form-control" [(ngModel)]="activeFilters.dateDebut">
                        </div>
                    </div>

                    <!-- Date de fin -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Date de fin</label>
                            <input type="date" class="form-control" [(ngModel)]="activeFilters.dateFin">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button type="button" class="btn btn-outline-white" (click)="resetFilters()">R\xE9initialiser</button>
                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-outline-white" (click)="closeFiltersModal()">Annuler</button>
                    <button type="button" class="btn btn-primary" (click)="applyFilters()">Appliquer</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de confirmation pour marquer toutes comme lues -->
<div class="modal fade" [class.show]="showMarkAllModal" [style.display]="showMarkAllModal ? 'block' : 'none'" 
     [class.d-block]="showMarkAllModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/notification-check.svg" alt="Marquer toutes comme lues">
                </div>
                <h6 class="mb-1">Marquer toutes comme lues</h6>
                <p class="mb-3">
                    \xCAtes-vous s\xFBr de vouloir marquer toutes les notifications comme lues ?
                </p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-white me-3" (click)="closeMarkAllModal()" [disabled]="processing">Annuler</button>
                    <button type="button" class="btn btn-primary" (click)="markAllAsRead()" [disabled]="processing">
                        <span *ngIf="processing" class="spinner-border spinner-border-sm me-1"></span>
                        Confirmer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de confirmation de suppression -->
<div class="modal fade" [class.show]="showDeleteModal" [style.display]="showDeleteModal ? 'block' : 'none'" 
     [class.d-block]="showDeleteModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="Suppression">
                </div>
                <h6 class="mb-1">Supprimer les notifications</h6>
                <p class="mb-3">
                    \xCAtes-vous s\xFBr de vouloir supprimer {{ selectedNotifications.size }} notification(s) s\xE9lectionn\xE9e(s) ?
                </p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-white me-3" (click)="closeDeleteModal()" [disabled]="processing">Annuler</button>
                    <button type="button" class="btn btn-danger" (click)="deleteSelectedNotifications()" [disabled]="processing">
                        <span *ngIf="processing" class="spinner-border spinner-border-sm me-1"></span>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/notifications/notifications.component.scss */\n.notifications-container .notification-item {\n  transition: all 0.3s ease;\n}\n.notifications-container .notification-item:hover {\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.notifications-container .notification-item.unread {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  border-left: 3px solid var(--bs-primary);\n}\n.notifications-container .notification-item.recent {\n  animation: pulse 2s infinite;\n}\n.notifications-container .notification-icon {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.notifications-container .notification-icon.priority-info {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container .notification-icon.priority-warning {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container .notification-icon.priority-error {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container .notification-icon.priority-critical {\n  background-color: rgba(var(--bs-dark-rgb), 0.1);\n  color: var(--bs-dark);\n}\n.notifications-container .notification-badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.notifications-container .notification-badge.status-en-attente {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container .notification-badge.status-envoye {\n  background-color: rgba(var(--bs-info-rgb), 0.1);\n  color: var(--bs-info);\n}\n.notifications-container .notification-badge.status-delivre {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container .notification-badge.status-lu {\n  background-color: rgba(var(--bs-success-rgb), 0.1);\n  color: var(--bs-success);\n}\n.notifications-container .notification-badge.status-echec {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container .notification-actions {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.notification-item:hover .notifications-container .notification-actions {\n  opacity: 1;\n}\n.notifications-container .stats-card {\n  transition: transform 0.3s ease;\n}\n.notifications-container .stats-card:hover {\n  transform: translateY(-5px);\n}\n.notifications-container .filters-modal .modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container .filters-modal .modal-header {\n  border-bottom: 1px solid var(--bs-border-color);\n  padding: 1.5rem;\n}\n.notifications-container .filters-modal .modal-header .modal-title {\n  font-weight: 600;\n  color: var(--bs-heading-color);\n}\n.notifications-container .filters-modal .modal-body {\n  padding: 1.5rem;\n}\n.notifications-container .filters-modal .modal-footer {\n  border-top: 1px solid var(--bs-border-color);\n  padding: 1rem 1.5rem;\n}\n.notifications-container .confirmation-modal .modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container .confirmation-modal .modal-body {\n  padding: 2rem;\n}\n.notifications-container .confirmation-modal .modal-body img {\n  max-width: 80px;\n  margin: 0 auto 1.5rem;\n}\n.notifications-container .confirmation-modal .modal-body h6 {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--bs-heading-color);\n}\n.notifications-container .confirmation-modal .modal-body p {\n  color: var(--bs-secondary-color);\n  margin-bottom: 1.5rem;\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0);\n  }\n}\n@media (max-width: 768px) {\n  .notifications-container .stats-card {\n    margin-bottom: 1rem;\n  }\n  .notifications-container .table-responsive {\n    font-size: 0.875rem;\n  }\n  .notifications-container .table-responsive th,\n  .notifications-container .table-responsive td {\n    padding: 0.5rem;\n  }\n  .notifications-container .table-responsive .notification-actions {\n    opacity: 1;\n  }\n  .notifications-container .modal-dialog {\n    margin: 0.5rem;\n  }\n  .notifications-container .modal-dialog.modal-dialog-centered {\n    min-height: calc(100% - 1rem);\n  }\n}\n[data-bs-theme=dark] .notifications-container .notification-item:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n[data-bs-theme=dark] .notifications-container .notification-item.unread {\n  background-color: rgba(var(--bs-primary-rgb), 0.15);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-info {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-warning {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-error {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-critical {\n  background-color: rgba(var(--bs-dark-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-en-attente {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-envoye {\n  background-color: rgba(var(--bs-info-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-delivre {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-lu {\n  background-color: rgba(var(--bs-success-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-echec {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n/*# sourceMappingURL=notifications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/modules/notifications/notifications.component.ts", lineNumber: 24 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-ZL52BPYT.js.map
