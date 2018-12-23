using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;


public class AdminScript : Script
{
	public AdminScript()
	{
		API.onPlayerConnected += OnPlayerConnected;
		API.onUpdate += onUpdate;
		API.onResourceStart += onResStart;
		API.onPlayerDisconnected += onPlayerDisconnected;
	}

    #region Commands

    [Command(SensitiveInfo = true, ACLRequired = true)]
    public void Login(Client sender, string password)
    {
        var logResult = API.loginPlayer(sender, password);
        switch (logResult)
        {
            case 0:
                API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ Kein Konto mit Ihrem Namen gefunden.");
                break;
            case 3:
            case 1:
                API.sendChatMessageToPlayer(sender, "~g~Sie sind nun als~b~" + API.getPlayerAclGroup(sender) + "~g~.eingeloggt");
                break;
            case 2:
                API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ Falsches Passwort!");
                break;
            case 4:
                API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ Du bist bereits eingeloggt!");
                break;
            case 5:
                API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ ACL wurde auf diesem Server deaktiviert.");
                break;
        }
    }


   [Command(ACLRequired = true)]
    public void Start(Client sender, string resource)
    {
        if (!API.doesResourceExist(resource))
        {
            API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
        }
        else if (API.isResourceRunning(resource))
        {
            API.sendChatMessageToPlayer(sender, "~r~Resource \"" + resource + "\" is already running!");
        }
        else
        {
            API.startResource(resource);
            API.sendChatMessageToPlayer(sender, "~g~Started resource \"" + resource + "\"");
        }
    }

    [Command(ACLRequired = true)]
    public void Stop(Client sender, string resource)
    {
        if (!API.doesResourceExist(resource))
        {
            API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
        }
        else if (!API.isResourceRunning(resource))
        {
            API.sendChatMessageToPlayer(sender, "~r~Resource \"" + resource + "\" is not running!");
        }
        else
        {
            API.stopResource(resource);
            API.sendChatMessageToPlayer(sender, "~g~Stopped resource \"" + resource + "\"");
        }
    }


    [Command(ACLRequired = true)]
    public void Restart(Client sender, string resource)
    {
        if (API.doesResourceExist(resource))
        {
            API.restartResource(resource);

            API.sendChatMessageToPlayer(sender, "~g~Restarted resource \"" + resource + "\"");
        }
        else
        {
            API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
        }
    }



    #endregion


	private void onResStart()
	{

	}

	public void onPlayerDisconnected(Client player, string reason)
	{
		API.logoutPlayer(player);
	}

	public void onUpdate()
	{

	}

	public void OnPlayerConnected(Client player)
    {
        var log = API.loginPlayer(player, "");
        if (log == 1)
        {
        	API.sendChatMessageToPlayer(player, "Angemeldet als ~b~" + API.getPlayerAclGroup(player) + "~w~.");
        }
        else if (log == 2)
        {
			API.sendChatMessageToPlayer(player, "~r~ Bitte melden Sie sich mit ~b ~ / login an ~g~ [password]");
        }
    }

}
