/**
*	@filename	pits.js
*	@author		M
*	@desc		clear pits
*	@credits	Adpist, kolton
*/

function pits_requirements(mfRun) {
	/***** REQUIREMENTS ******/
	if (!mfRun)	{
		HordeDebug.logUserError("pits", "pits isn't a questing run");
		return Sequencer.skip;//Skip sequence, not a questing run
	}

	/***** END OF REQUIREMENTS ******/

	return Sequencer.ok;//We can process sequence
}

function pits(mfRun) { // SiC-666 TODO: Rewrite this.
	var startLvl2 = true;
	
	if (Role.teleportingChar) {
		Town.goToTown();
		if (!Pather.useWaypoint(6)) {
			throw new Error();
		}
		Pather.teleport = true;
		if (!Pather.moveToExit([7, 12], true)) {
			throw new Error("Failed to move to Pit level 1");
		}
		if (startLvl2) {
			if (!Pather.moveToExit(16, true)) {
				throw new Error("Failed to move to Pit level 2");
			}
		}
		Role.makeTeamJoinPortal();
		delay(1750);
	} else {
		Town.goToTown(1);
		Town.move("portalspot");
		var j = 0;
		while(!Pather.usePortal(startLvl2 ? 16 : 12, null)) {
			delay(250);

			if (j % 20 == 0) { // Check for Team Members every 5 seconds.
				Party.wholeTeamInGame();
			}

			j += 1;
		}
	}
	
	if (HordeSystem.teamSize > 1) {
		Pather.teleport = HordeSystem.isEndGame();
	}
	if (!startLvl2) {
		Party.waitForMembers();
		Attack.clearLevel(Config.ClearType);

		if (!Pather.moveToExit(16, true, Config.Pit.ClearPath)) {
			throw new Error("Failed to move to Pit level 2");
		}
	}
	
	Party.waitForMembers();

	Attack.clearLevel();

	Pather.teleport = true;
	Role.backToTown();

	return Sequencer.done;
}