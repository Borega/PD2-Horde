/**
*	@filename	den.js
*	@author		Adpist
*	@desc		clear den and complete quest
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

function den_requirements(mfRun) {
	/***** REQUIREMENTS ******/
	if (mfRun) {
		HordeDebug.logUserError("den",  "not supported as mf run");
		return Sequencer.skip;//Skip : not supported
	}
	
	if (me.getQuest(1,0)) {
		return Sequencer.skip;//Skip: quest is completed
	}
	/***** END OF REQUIREMENTS ******/
	
	return Sequencer.ok;//We can process sequence
}

function den(mfRun) {
	var i, akara;
	
	if (me.diff === 0) { // All characters grab Cold Plains Waypoint in Normal. Only the Teleporting Sorc grabs it in Nightmare and Hell.
		if (!getWaypoint(1))
		{
			Travel.safeMoveToExit(2, true, true);
			Party.wholeTeamInGame();
			Party.waitForMembers(me.area, 3);
			Pather.moveToExit(3, true, true);
			if (!getWaypoint(1))
				Pather.getWP(3);
		}
		else
		{
			Pather.useWaypoint(3);
		}
		Party.waitForMembers();
		Pather.moveToExit(2, true, true);
		Pather.moveToExit(8, true, true);
		Party.waitForMembers();
		Buff.Bo();
		for (i = 0; i < 3; i += 1) {
			Party.wholeTeamInGame();

			Attack.clearLevel();

			sendPacket(1, 0x40); // Refresh quest status

			delay(me.ping * 2 + 250);

			if (me.getQuest(1, 1)) { // Den is cleared. Return to Akara for a Reward.
				break;
			}
		}
		
		if (!Role.backToTown(false)){
			while (!me.inTown) {
				switch (me.area) {
				case 8:
					Pather.moveToExit(2, true, true);

					break;
				case 2:
					Pather.moveToExit(1, true, true);
				}
				Packet.flash(me.gid);
				delay(me.ping * 2 + 250);
			}
		}
	} else { // diff > 0		
		Town.goToTown(1);
		if (Role.teleportingChar) {
			if (!getWaypoint(1)) {
				Travel.clearToExit(1, 2, false); // Move from Rogue Encampment to Blood Moor

				Travel.clearToExit(2, 3, false); // Move from Blood Moor to Cold Plains

				Waypoint.clickWP();

				Pather.useWaypoint(1);
			}
			Travel.clearToExit(1, 2, false); // Move from Rogue Encampment to Blood Moor

			Travel.clearToExit(2, 8, false);

			Role.makeTeamJoinPortal();

			Pather.teleport = false; // not teleporting in Den

			delay(3000);
		} else {
			Town.move("portalspot");
			while (!Pather.usePortal(8, null)) {
				delay(250);
			}
			Buff.Bo();
		}
		for (i = 0; i < 3; i += 1) {
			print("clearing - try number " + i);

			Party.wholeTeamInGame();

			Attack.clearLevel();

			sendPacket(1, 0x40); // Refresh quest status

			delay(me.ping * 2 + 250);

			if (me.getQuest(1, 1)) { // Den is cleared. Return to Akara for a Reward.
				break;
			}
		}
		if (Role.teleportingChar)
			Pather.teleport = true;
			
		Role.backToTown();
	}
	

	if (me.inTown) {
		if (!me.getQuest(1, 1)) {
			var j = 0;

			while (!me.getQuest(1, 1) && !me.getQuest(1, 0)) { // Meant to make sorc wait for all the immune monsters to be killed before talking to Akara in hell difficulty.
				delay(250);

				if (j % 20 == 0) { // Check for Team Members every 5 seconds.
					Party.wholeTeamInGame();
				}

				j += 1;
			}
		}

		Town.move("akara");

		akara = getUnit(1, "akara");

		akara.openMenu();

		me.cancel();

		delay(me.ping * 2 + 250);
	}

	return Sequencer.done;
}
