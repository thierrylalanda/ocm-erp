import { routes } from "../../core/helpers/routes/routes";

export const ManageUsersRoute = [{
      tittle: "Manage",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Manage User",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "profile-2user5",
          base: "manage-users",
          subMenus: [
            {
              menuValue: "Users",
              route: routes.allUsers,
              base: "users",
              permissions:['HIERARCHIE:UTILISATEUR:LIST']
            },
            {
              menuValue: "Roles & Permission",
              route: routes.rolePermissions,
              base: "roles-permission",
              permissions:['SECURITY:ROLE:LIST']
            },
            {
              menuValue: "Delect Account Request",
              route: routes.deleteAccountRequest,
              base: "delete-account-request",
              permissions:['HIERARCHIE:UTILISATEUR:DELETE']
            }
          ]
        },
        {
          menuValue: "Membership",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "star-15",
          base: "membership",
          subMenus: [
            {
              menuValue: "Membership Plans",
              route: routes.membershipPlans,
              base: "membership-plans"
            },
            {
              menuValue: "Membership Addons",
              route: routes.membershipAddons,
              base: "membership-addons"
            },
            {
              menuValue: "Subscribers",
              route: routes.subscribers,
              base: "subscribers"
            },
            {
              menuValue: "Transactions",
              route: routes.membershipTransactions,
              base: "transactions"
            }
          ]
        },
        {
          menuValue: "Contact Messages",
          route: routes.contactMessages,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "messages-25",
          base: "contact-messages",
          subMenus: []
        },
        {
          menuValue: "Tickets",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "ticket-25",
          base: "tickets",
          subMenus: [
            {
              menuValue: "Ticket List",
              route: routes.ticketList,
              base: "ticket-list"
            },
            {
              menuValue: "Ticket Kanban",
              route: routes.ticketKanban,
              base: "ticket-kanban"
            },
            {
              menuValue: "Ticket Details",
              route: routes.ticketDetails,
              base: "ticket-details"
            }
          ]
        }
      ]
    }]