export default class SideNavController {
	constructor(PortalService) {
		this.menuList = [];
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
					menuItem.parent = parent;
				}
			});
			
			this.menuList = menus;
		});
	}
	
	menuClick(menu, evt) {
		this.menuList.forEach(item => {
			if (item == menu) {
				menu.$expanded = !menu.$expanded;
			}
			else {
				if (item != menu.parent) {
					delete item.$expanded;
				}
			}
		});
		
		evt.stopPropagation();
	}
}

SideNavController.$inject = ["PortalService"];