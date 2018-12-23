var vehiclesWindow = null;
var invincible = false;

API.onResourceStart.connect(function (sender, e) {
	vehiclesWindow = API.createMenu("VEHICLES", 0, 0, 6);

	var linkItem = API.createMenuItem("Vehicles", "");
	resource.trainer.mainWindow.AddItem(linkItem);
	resource.trainer.mainWindow.BindMenuToItem(vehiclesWindow, linkItem);

	vehiclesWindow.AddItem(addVehicleItem("T20", 1663218586));
	vehiclesWindow.AddItem(addVehicleItem("Futo", 2016857647));
	vehiclesWindow.AddItem(addVehicleItem("Ruston", 719660200));
    vehiclesWindow.AddItem(addVehicleItem("Burrito", -1346687836));
	vehiclesWindow.AddItem(addVehicleItem("Maverick", -1660661558));
	vehiclesWindow.AddItem(addVehicleItem("Seashark", -1030275036));
	vehiclesWindow.AddItem(addVehicleItem("Windsor2", -1930048799));
	vehiclesWindow.AddItem(addVehicleItem("TriBike3", -400295096));
	vehiclesWindow.AddItem(addVehicleItem("Dukes2", -326143852));
	vehiclesWindow.AddItem(addVehicleItem("Luxor2", -1214293858));
	vehiclesWindow.AddItem(addVehicleItem("Miljet", 165154707));
	vehiclesWindow.AddItem(addVehicleItem("Rogue", -975345305));
	vehiclesWindow.AddItem(addVehicleItem("Tempesta", 272929391));
	vehiclesWindow.AddItem(addVehicleItem("Blazer5", -1590337689));
	vehiclesWindow.AddItem(addVehicleItem("Submersible2", -1066334226));
	vehiclesWindow.AddItem(addVehicleItem("Dune5",-312295511));
	vehiclesWindow.AddItem(addVehicleItem("Prototipo", 2123327359));
	vehiclesWindow.AddItem(addVehicleItem("TowTruck", -1323100960));
	vehiclesWindow.AddItem(addVehicleItem("Windsor", 1581459400));
	vehiclesWindow.AddItem(addVehicleItem("Raptor", -674927303));
	vehiclesWindow.AddItem(addVehicleItem("Omnis", -777172681));
	vehiclesWindow.AddItem(addVehicleItem("Blimp", -150975354));
	vehiclesWindow.AddItem(addVehicleItem("Brickade", -305727417));
	 vehiclesWindow.AddItem(addVehicleItem("Sanchez", 788045382));
	vehiclesWindow.AddItem(addVehicleItem("shotaro", -405626514));
	vehiclesWindow.AddItem(addVehicleItem("police", 2046537925));
	vehiclesWindow.AddItem(addVehicleItem("police2",-1627000575));
	vehiclesWindow.AddItem(addVehicleItem("police3", 1912215274));
	vehiclesWindow.AddItem(addVehicleItem("police4", -1973172295));
	vehiclesWindow.AddItem(addVehicleItem("PoliceT", 456714581));
    vehiclesWindow.AddItem(addVehicleItem("Buzzard", 788747387));
    vehiclesWindow.AddItem(addVehicleItem("Hydra", 970385471));
	vehiclesWindow.AddItem(addVehicleItem("Riot", -1205689942));


	vehiclesWindow.RefreshIndex();
});

function addVehicleItem(gun, hash) {
	var suicide = API.createMenuItem(gun, "");

	suicide.Activated.connect(function (menu, item) {
		API.triggerServerEvent("CREATE_VEHICLE", hash);
	});

	return suicide;
}


API.onUpdate.connect(function (s, e) {

})
