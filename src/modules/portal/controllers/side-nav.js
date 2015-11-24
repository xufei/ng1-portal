export default class SideNavController {
	constructor(PortalService) {
		this.menuTree = [];
		this.menuMap = {};

		this.PortalService = PortalService;
	}

	init() {
		this.PortalService.getMenuList().then(menus => {
			menus.forEach(menuItem => {
				this.menuMap[menuItem.code] = menuItem;

				if (!menuItem.parent) {
					this.menuTree.push(menuItem);
				}
				else {
					let parent = this.menuMap[menuItem.parent];
					if (!parent.children) {
						parent.children = [];
					}
					parent.children.push(menuItem);
					menuItem.parentMenu = parent;
				}
			});
			
			console.log(this.menuTree);
		});
	}
}

SideNavController.$inject = ["PortalService"];