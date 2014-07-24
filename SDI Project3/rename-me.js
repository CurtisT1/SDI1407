alert("javascript Works ");


// Curtis Tate	
// SDI 1407
// Project 3 



// Global Variables 
 
 
 var warlock = "Otto";
 var witch1 = "LadySif"
 var witch2 = "Miff"
 var witch3 = "Tiff"
 var weapon1 = "Wand";
 var weapon2 = "Staff";
 var spell1 = "Fire Dragon flame";
 var spell2 = "Cosmic Rain"; 
 
 
 // Json Data
 
 
 var Different = {
	"Witches": {
			"witch1": { 
			"name": "Lady Sif",
			"powers": "Throw Ice Balls"
		},	
			"witch2": { 
			"name": "Miff",
			"Powers": "Throw Ice Shards"
	},
			"witch3": { 
			"name": "Tiff",
			"Powers": "Freeze things"
		}
	}
};


// Function
    
    var  chooseWeapon = function (warlockName, weapon1) {
		console.log("choose " + weapon1 + " warlock" + warlockName);
	var useWeapon = function(warlockName) {
	var weapon1 = "wand";
		console.log("choose " + weapon1 + warlockName);
	};	 
	useWeapon("warlock");
	useWeapon("witch1");
	console.log(warlockName + " choose " + weapon1);
}; 

console.log("The warlock arrives at the witches hideout");
console.log("",witch1," ",witch2,", and ",witch3," thought they should make this battle over before it even starts so they combine all their magically powers and energy to kill ",warlock," with one move but they did not know what he was truly capable of");  
console.log("So they conjures everything they had at him all a once. ",warlock," uses all his magically energy to block the witches attack with a wall of flames and had to quickly choose " ,weapon1," or " ,weapon2,'.');
console.log("",weapon1," is faster and gives " ,warlock, " more movement. ",weapon2," is heavy and drains half of his magic energy.");
console.log("",warlock," chooses the ",weapon2," for more powerful magic.");

//Boolean Function

console.log("",warlock, " quickly conjure a force field of fire over his body and went into a powerful trance to recharge.");
console.log("the witches try everything to break the shield but it was impenetrable, the witches was stunt of the power he had to block every attack."); 

var recharge = {
	rechargeMethod: function(ringOfFire, beaconOfFlames){
	if (ringOfFire + beaconOfFlames > 0) {
	var fullyCharge = true 
	return fullCharge;
		}else{
		var notCharge = fasle 
		return notCharge;
	}
}
};

// Function


var chant = {
	chanting : function (focusAfterCharge) {
	while (chantingAfterCharged < 3) {
		console.log(focusAfterCharge + "Chanting");
	focusAfterCharge = focusAfterCharge + 1;
	}
	}
};
console.log("",warlock," is fully charge and ready to defeat the witches");



