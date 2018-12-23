var mainWindow = null;
var invincible = false;

API.onResourceStart.connect(function (sender, e) {
    mainWindow = API.createMenu("WEAPONS", 0, 0, 6);

    var linkItem = API.createMenuItem("Weapons", "");
    resource.trainer.mainWindow.AddItem(linkItem);
    resource.trainer.mainWindow.BindMenuToItem(mainWindow, linkItem);

    mainWindow.AddItem(addGunItem("SniperRifle", 100416529));
    mainWindow.AddItem(addGunItem("CombatPDW", 171789620));
    mainWindow.AddItem(addGunItem("Pistol", 453432689));
    mainWindow.AddItem(addGunItem("PumpShotgun", 487013001));
    mainWindow.AddItem(addGunItem("APPistol", 584646201));
    mainWindow.AddItem(addGunItem("Ball", 600439132));
    mainWindow.AddItem(addGunItem("Molotov", 615608432));
    mainWindow.AddItem(addGunItem("Golfclub", 1141786504));
    mainWindow.AddItem(addGunItem("Hammer", 1317494643));
    mainWindow.AddItem(addGunItem("CombatPistol", 1593441988));
    mainWindow.AddItem(addGunItem("Gusenberg", 1627465347));
    mainWindow.AddItem(addGunItem("CompactRifle", 1649403952));
    mainWindow.AddItem(addGunItem("BullpupRifle", 2132975508));
    mainWindow.AddItem(addGunItem("CarbineRifle", -2084633992));
    mainWindow.AddItem(addGunItem("Pistol50", -1716589765));
    mainWindow.AddItem(addGunItem("MG", -1660422300));
    mainWindow.AddItem(addGunItem("SNSPistol", -1076751822));
    mainWindow.AddItem(addGunItem("AssaultRifle", -1074790547));
    mainWindow.AddItem(addGunItem("SpecialCarbine", -1063057011));
    mainWindow.AddItem(addGunItem("Battleaxe", -853065399));
    mainWindow.AddItem(addGunItem("MachinePistol", -619010992));
    mainWindow.AddItem(addGunItem("MarksmanPistol", -598887786));
    mainWindow.AddItem(addGunItem("AssaultSMG", -270015777));


    mainWindow.RefreshIndex();
});

function addGunItem(gun, hash) {

    var suicide = API.createMenuItem(gun, "");

    suicide.Activated.connect(function (menu, item) {
        API.triggerServerEvent("REQUEST_WEAPON", hash);
    });

    return suicide;
}


API.onUpdate.connect(function (s, e) {

})
