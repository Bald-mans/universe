function formatTwoStageRoutes(routesList: RouteRecordRaw[]) {
    if (routesList.length === 0) return routesList;
    const newRoutesList: RouteRecordRaw[] = [];
    routesList.forEach((v: RouteRecordRaw) => {
        if (v.path === "/") {
            newRoutesList.push({
                component: v.component,
                name: v.name,
                path: v.path,
                redirect: v.redirect,
                meta: v.meta,
                children: []
            });
        } else {
            newRoutesList[0].children.push({ ...v });
        }
    });
    return newRoutesList;
}

function formatFlatteningRoutes(routesList: RouteRecordRaw[]) {
    if (routesList.length === 0) return routesList;
    let hierarchyList = buildHierarchyTree(routesList);
    for (let i = 0; i < hierarchyList.length; i++) {
        if (hierarchyList[i].children) {
            hierarchyList = hierarchyList
                .slice(0, i + 1)
                .concat(hierarchyList[i].children, hierarchyList.slice(i + 1));
        }
    }
    return hierarchyList;
}

export{
    formatFlatteningRoutes,
    formatTwoStageRoutes
}