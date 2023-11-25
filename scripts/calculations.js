// Currently Cubiomes Viewer's Locate Climate Extreme's continentalness climate's dropdown menu is missing the last four suboctaves, so this works around that until that gets fixed.
const MISSING_CONTS_BUG_PRESENT = true;
const LAST_SUBOCTAVE_INDEX = 14;

// The coordinates and distance-based fitnesses of each point the first stage of the spawn algorithm checks.
const POINTS = [
	// Zeroth ring
	{coord: "(0, 0)", fitness: 0, cubiomesCoord: "0000000000000000"},
	// First ring
	{coord: "(430, 276)"  , fitness: 174491.33510656, cubiomesCoord: "6b00000045000000"},
	{coord: "(-490, 145)" , fitness: 174556.84      , cubiomesCoord: "85ffffff24000000"},
	{coord: "(72, -506)"  , fitness: 174683.874304  , cubiomesCoord: "1200000081ffffff"},
	{coord: "(-387, -334)", fitness: 174824.3344    , cubiomesCoord: "9fffffffacffffff"},
	{coord: "(-143, 491)" , fitness: 175098.728704  , cubiomesCoord: "dcffffff7a000000"},
	{coord: "(465, -213)" , fitness: 175184.43734016, cubiomesCoord: "74000000caffffff"},
	{coord: "(0, 512)"    , fitness: 175921.86044416, cubiomesCoord: "0000000080000000"},
	// Second ring
	{coord: "(-1000, -215)", fitness: 2802142.0816    , cubiomesCoord: "06ffffffcaffffff"},
	{coord: "(-981, 290)"  , fitness: 2803406.39877376, cubiomesCoord: "0affffff48000000"},
	{coord: "(490, 898)"   , fitness: 2803636.79236096, cubiomesCoord: "7a000000e0000000"},
	{coord: "(-774, -669)" , fitness: 2804349.46500864, cubiomesCoord: "3effffff58ffffff"},
	{coord: "(-359, -958)" , fitness: 2804392.335424  , cubiomesCoord: "a6ffffff10ffffff"},
	{coord: "(144, -1013)" , fitness: 2805785.802304  , cubiomesCoord: "2400000002ffffff"},
	{coord: "(-722, 725)"  , fitness: 2805807.24295936, cubiomesCoord: "4bffffffb5000000"},
	{coord: "(612, -820)"  , fitness: 2805994.85218816, cubiomesCoord: "9900000033ffffff"},
	{coord: "(861, 553)"   , fitness: 2806991.966464  , cubiomesCoord: "d70000008a000000"},
	{coord: "(1021, 72)"   , fitness: 2809646.44      , cubiomesCoord: "ff00000012000000"},
	{coord: "(-286, 983)"  , fitness: 2812114.348096  , cubiomesCoord: "b8fffffff5000000"},
	{coord: "(931, -426)"  , fitness: 2812930.06891264, cubiomesCoord: "e800000095ffffff"},
	{coord: "(0, 1024)"    , fitness: 2814749.76710656, cubiomesCoord: "0000000000010000"},
	// Third ring
	{coord: "(-1472, 435)"  , fitness: 14209992, cubiomesCoord: "90feffff6c000000"},
	{coord: "(-1426, -568)" , fitness: 14211090, cubiomesCoord: "9bfeffff72ffffff"},
	{coord: "(-1162, -1003)", fitness: 14212936, cubiomesCoord: "ddfeffff05ffffff"},
	{coord: "(-292, -1507)" , fitness: 14213660, cubiomesCoord: "b7ffffff87feffff"},
	{coord: "(1492, 361)"   , fitness: 14214528, cubiomesCoord: "750100005a000000"},
	{coord: "(1528, -147)"  , fitness: 14214625, cubiomesCoord: "7e010000dbffffff"},
	{coord: "(1292, 829)"   , fitness: 14215976, cubiomesCoord: "43010000cf000000"},
	{coord: "(-429, 1474)"  , fitness: 14218534, cubiomesCoord: "94ffffff70010000"},
	{coord: "(216, -1520)"  , fitness: 14222625, cubiomesCoord: "3600000084feffff"},
	{coord: "(1396, -639)"  , fitness: 14223602, cubiomesCoord: "5d01000060ffffff"},
	{coord: "(502, 1451)"   , fitness: 14226837, cubiomesCoord: "7d0000006a010000"},
	{coord: "(949, 1207)"   , fitness: 14227380, cubiomesCoord: "ed0000002d010000"},
	{coord: "(-1249, 893)"  , fitness: 14227380, cubiomesCoord: "c7feffffdf000000"},
	{coord: "(-769, -1329)" , fitness: 14229215, cubiomesCoord: "3fffffffb3feffff"},
	{coord: "(1110, -1061)" , fitness: 14231858, cubiomesCoord: "15010000f6feffff"},
	{coord: "(-1534, -70)"  , fitness: 14234695, cubiomesCoord: "80feffffeeffffff"},
	{coord: "(-888, 1253)"  , fitness: 14240696, cubiomesCoord: "22ffffff39010000"},
	{coord: "(702, -1366)"  , fitness: 14243196, cubiomesCoord: "af000000aafeffff"},
	{coord: "(0, 1536)"     , fitness: 14249670.69597696, cubiomesCoord: "0000000080010000"},
	// Fourth ring
	{coord: "(781, -1892)"  , fitness: 44935571, cubiomesCoord: "c300000027feffff"},
	{coord: "(-1549, -1338)", fitness: 44936000, cubiomesCoord: "7cfeffffb1feffff"},
	{coord: "(-2001, -431)" , fitness: 44938510, cubiomesCoord: "0bfeffff94ffffff"},
	{coord: "(-1963, 580)"  , fitness: 44938660, cubiomesCoord: "15feffff91000000"},
	{coord: "(-1040, 1763)" , fitness: 44938660, cubiomesCoord: "fcfeffffb8010000"},
	{coord: "(-1832, -913)" , fitness: 44939175, cubiomesCoord: "36feffff1bffffff"},
	{coord: "(1395, 1498)"  , fitness: 44944238, cubiomesCoord: "5c01000076010000"},
	{coord: "(-221, -2035)" , fitness: 44945031, cubiomesCoord: "c8ffffff03feffff"},
	{coord: "(1225, -1640)" , fitness: 44948443, cubiomesCoord: "3201000066feffff"},
	{coord: "(-718, -1917)" , fitness: 44952476, cubiomesCoord: "4cffffff20feffff"},
	{coord: "(2042, 144)"   , fitness: 44954343, cubiomesCoord: "fe01000024000000"},
	{coord: "(-1444, 1451)" , fitness: 44955136, cubiomesCoord: "97feffff6a010000"},
	{coord: "(-67, 2046)"   , fitness: 44956595, cubiomesCoord: "efffffffff010000"},
	{coord: "(1943, 645)"   , fitness: 44970951, cubiomesCoord: "e5010000a1000000"},
	{coord: "(-1170, -1680)", fitness: 44971508, cubiomesCoord: "dbfeffff5cfeffff"},
	{coord: "(1593, -1286)" , fitness: 44974620, cubiomesCoord: "8e010000befeffff"},
	{coord: "(981, 1797)"   , fitness: 44977303, cubiomesCoord: "f5000000c1010000"},
	{coord: "(1723, 1106)"  , fitness: 44985780, cubiomesCoord: "ae01000014010000"},
	{coord: "(-2046, 77)"   , fitness: 44987497, cubiomesCoord: "00feffff13000000"},
	{coord: "(289, -2027)"  , fitness: 44991897, cubiomesCoord: "4800000005feffff"},
	{coord: "(506, 1984)"   , fitness: 44992799, cubiomesCoord: "7e000000f0010000"},
	{coord: "(-572, 1966)"  , fitness: 44993829, cubiomesCoord: "71ffffffeb010000"},
	{coord: "(-1759, 1048)" , fitness: 44994795, cubiomesCoord: "48feffff06010000"},
	{coord: "(1862, -852)"  , fitness: 45006881, cubiomesCoord: "d10100002bffffff"},
	{coord: "(2015, -365)"  , fitness: 45017658, cubiomesCoord: "f7010000a4ffffff"},
	{coord: "(0, 2048)"     , fitness: 45035996.27370496, cubiomesCoord: "0000000000020000"},
];

// The maximum possible amplitude of a single Perlin noise octave.
const MAX_PERLIN_AMPLITUDE = 1.0363538112118025;

// The maximum value all continentalness suboctaves after the ith one can sum to (times the climate's fixed amplitude of 3/2).
const MAX_OCTAVE_AMPLITUDE_SUMS = [
	1485/511 * MAX_PERLIN_AMPLITUDE,
	1101/511 * MAX_PERLIN_AMPLITUDE,
	909/511  * MAX_PERLIN_AMPLITUDE,
	717/511  * MAX_PERLIN_AMPLITUDE,
	75/73    * MAX_PERLIN_AMPLITUDE,
	333/511  * MAX_PERLIN_AMPLITUDE,
	237/511  * MAX_PERLIN_AMPLITUDE,
	141/511  * MAX_PERLIN_AMPLITUDE,
	93/511   * MAX_PERLIN_AMPLITUDE,
	45/511   * MAX_PERLIN_AMPLITUDE,
	33/511   * MAX_PERLIN_AMPLITUDE,
	3/73     * MAX_PERLIN_AMPLITUDE,
	15/511   * MAX_PERLIN_AMPLITUDE,
	9/511    * MAX_PERLIN_AMPLITUDE,
	6/511    * MAX_PERLIN_AMPLITUDE,
	3/511    * MAX_PERLIN_AMPLITUDE,
	3/1022   * MAX_PERLIN_AMPLITUDE,
	0        * MAX_PERLIN_AMPLITUDE,
];

// The possible headers of the table for when points need to be displayed.
const TABLE_HEADER_NO_SUBOCTAVES = "<tr> <th>Coordinate</th> <th>Most Positive Continentalness</th> </tr>";
const TABLE_HEADER_SUBOCTAVES = "<tr> <th>Coordinate</th> <th>Number of Suboctaves</th> <th>Most Positive Continentalness</th> </tr>";

var lastMultiplied = false;

// Add event listeners to the input fields so they automatically update as the user types
function initialize() {
	document.getElementById("desiredDist").addEventListener("input", function(){calculate();});
	document.getElementById("desiredCont").addEventListener("input", function(){calculate();});
	document.getElementById("suboctaves").addEventListener("input", function(){calculate();});
	document.getElementById("suboctaves").addEventListener("input", function(){updateRange();});
	document.getElementById("spawnDisplacement").addEventListener("input", function(){calculate();});
	document.getElementById("multiply").addEventListener("input", function(){calculate();});
	document.getElementById("version").addEventListener("input", function(){calculate();});
}

function updateRange() {
	var element = document.getElementById("suboctaves");
	var label = document.getElementById("suboctaveValue");
	switch (element.value) {
		case element.min:
			label.innerHTML = "(None)";
			break;
		case element.max:
			label.innerHTML = "(All)";
			break;
		default:
			label.innerHTML = "(" + Number(element.value).toFixed(2) + ")";
			break;
	}
}

// Ensures the current input is a valid one.
function validateInput(id) {
	var element = document.getElementById(id);
	// Tests if the retrieved element is null
	if (!element) {
		alert("The element " + id + " could not be found to be validated. (This is an issue with the website, not with you, so please report this if you see it.)");
		return false;
	}
	// Tests if the retrieved element's value is NaN
	var value = Number(element.value);
	if (isNaN(value)) {
		alert("The " + element.name + " is not a number.");
		element.focus();
		return false;
	}
	// Tests if the retrieved element's value is out of bounds
	if (value < element.min || value > element.max) {
		alert("The " + element.name + " must be between " + element.min + " and " + element.max + " (inclusive).");
		element.focus();
		return false;
	}
	// Otherwise returns true
	return true;
}

// Performs the calculations
function calculate() {
	var button = document.getElementById("copy");
	button.disabled = true;
	// Returns immediately if the inputs are invalid
	if (!validateInput("desiredDist") || !validateInput("desiredCont")) {
		return;
	}

	var suboctaveValue = document.getElementById("suboctaves").value;
	const suboctavesChecked = suboctaveValue != document.getElementById("suboctaves").min;
	lastMultiplied = document.getElementById("multiply").checked;
	const minCont = document.getElementById("desiredCont").min * (lastMultiplied ? 10000 : 1);
	document.getElementById("status").innerText = "";

	// Replaces table with just the header, for now
	var table = document.getElementById("data");
	if (suboctavesChecked && (document.getElementById("version").value == "38000000")) {
		table.innerHTML = "<tr> <th>Suboctaves are not supported in v2.x.</th> </tr>";
		return;
	}
	table.innerHTML = suboctavesChecked ? TABLE_HEADER_SUBOCTAVES : TABLE_HEADER_NO_SUBOCTAVES;
	// Retrieves dist and cont (known not to be NaN). Also subtracts dist by the max spawn displacement, 88sqrt(2), if that is enabled.
	var dist = Number(document.getElementById("desiredDist").value);
	var cont = Number(document.getElementById("desiredCont").value);
	if (document.getElementById("spawnDisplacement").checked) dist = Math.max(dist - 88 * Math.SQRT2, 0);
	// If dist == 0 and cont >= -0.11, the desired fitness will be 0, which all seeds can obtain.
	if (!dist && cont >= -0.11) {
		table.innerHTML = "<tr> <th>No conditions are necessary.</th> </tr>";
		return;
	}
	// Otherwise calculate necessary fitness.
	var desiredFitness = Math.pow(dist, 4)/390625 + Math.pow(Math.min(10000*cont + 1100, 0), 2);

	// Then iterates through the points array until a point's distance fitness falls less than the desired fitness
	for (let point of POINTS) {
		if (desiredFitness < point.fitness) break;

		// Performs calculations two different ways, depending on whether multiply checkbox is marked, to try to reduce error
		var efc = -Math.sqrt(desiredFitness - point.fitness);
		efc = lastMultiplied ? efc - 1100 : efc/10000 - 0.11;
		// If a point's EFC would be greater than the most negative possible cont, that point is impossible to achieve in a world, so the desired spawnpoint is impossible
		if (efc < minCont) {
			table.innerHTML = "<tr> <th>Desired spawnpoint is impossible.</th> </tr>";
			return;
		}
		// If suboctaves are enabled...
		if (suboctavesChecked) {
			// Iterates from last octave's first suboctave to the end of the amplitude list
			let firstSuboctave = 0;
			for (let j = firstSuboctave; j < MAX_OCTAVE_AMPLITUDE_SUMS.length; ++j) {
				// Calculates suboctave's EFC
				var subEFC = efc + MAX_OCTAVE_AMPLITUDE_SUMS[j] * (lastMultiplied ? 10000 : 1);
				// If it is greater than the most positive possible cont (the inverse of the most negative possible cont), condition will always be satisfied, so skip that index
				if (subEFC > suboctaveValue * (lastMultiplied ? 10000 : 1)) {
					if (j > firstSuboctave) firstSuboctave = j;
					continue;
				}
				// Otherwise add a row to the end of the table containing the coordinates, suboctave, and EFC
				var row = table.insertRow(-1);
				row.insertCell(0).innerHTML = point.coord;
				row.insertCell(1).innerHTML = j + 1;
				row.insertCell(-1).innerHTML = subEFC;
				button.disabled = false;
			}
		// Otherwise add a single row to the end of the table containing the coordinates and EFC
		} else {
			var row = table.insertRow(-1);
			row.insertCell(0).innerHTML = point.coord;
			row.insertCell(-1).innerHTML = efc;
			button.disabled = false;
		}
	}
	// If nothing ended up being printed, it's due to suboctave limit being set too low
	if (button.disabled && suboctavesChecked) {
		table.innerHTML = "<tr> <th>No conditions match the suboctave threshold.</th> </tr>";
	}
}

function copyCubiomes() {
	const suboctavesChecked = document.getElementById("suboctaves").value != document.getElementById("suboctaves").min;

	// Saves table as element
	var table = document.getElementById("data");
	var conditions = ""

	// Keeps track of the current coordinate and the current condition we're on, respectively
	var currentCoord = 0;
	var initConditionIndex = Number(document.getElementById("startCountAt").value);
	var conditionIndex = initConditionIndex;
	// Iterates over all table rows from the 1st (0 is the header) onwards
	for (let r = 1; r < table.rows.length; ++r) {
		var row = table.rows[r];
		// If condition gets higher than 99, Cubiomes Viewer can't display it, so exit
		if (conditionIndex > 99) break;
		// Updates currentCoord if the current row's coordinate doesn't match
		while (POINTS[currentCoord].coord != row.cells[0].innerText) ++currentCoord;
		// Appends #Cond: , the version (Locate Climate Extreme for 3.x, Climate Parameters for 2.x) and encoded coordinates
		var condition = "#Cond: " + document.getElementById("version").value + POINTS[currentCoord].cubiomesCoord + POINTS[currentCoord].cubiomesCoord;
		
		// Appends condition index and static condition part (for us at least)
		var index = conditionIndex.toString(16);
		condition += (index.length < 2 ? "0" : "") + index + "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002";

		// Adds suboctave if that is enabled
		var suboctave = "00";
		if (suboctavesChecked) {
			// Fetches octave number
			let i = Number(row.cells[1].innerText);
			if (MISSING_CONTS_BUG_PRESENT && i > LAST_SUBOCTAVE_INDEX) continue;
			// Resets to 0 (i.e. all octaves) if i is last suboctave
			if (i == MAX_OCTAVE_AMPLITUDE_SUMS.length) i = 0;
			suboctave = i.toString(16);
		}
		// Appends suboctave index and next static condition part
		condition += (suboctave.length < 2 ? "0" : "") + suboctave + "00000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000010000200000000000000000000000000000000000000000000080ffffff7f00000080ffffff7f00000080ffffff7f00000080ffffff7f00000080ffffff7f00000080ffffff7f00000080ffffff7f00000080ffffff7f00000080";

		// Retrieves cont value from table
		var value = Number(row.cells[1 + suboctavesChecked].innerText) * (lastMultiplied ? 1 : 10000);
		// Climate parameter treats the value as an int (might replace this with bytearrays at some point)
		var cubiomes2Val = Math.round(value);
		if (cubiomes2Val < 0) cubiomes2Val += 0x100000000;
		cubiomes2Val = cubiomes2Val.toString(16);
		while (cubiomes2Val.length < 8) cubiomes2Val = '0' + cubiomes2Val;
		// Appends encoded 2.x value and last static part
		condition += cubiomes2Val[6] + cubiomes2Val[7] + cubiomes2Val[4] + cubiomes2Val[5] + cubiomes2Val[2] + cubiomes2Val[3] + cubiomes2Val[0] + cubiomes2Val[1] + "00000080ffffff7f00000080ffffff7f00000080ffffff7f";

		// Locate Climate Extreme saves the number as a float via its IEEE754 representation, so retrieves bytes for that
		// Adapted from https://stackoverflow.com/questions/9383593/extracting-the-exponent-and-mantissa-of-a-javascript-number
		var mantissa = new Float32Array(1);
		mantissa[0] = Math.fround(value);
		var bytes = new Uint8Array(mantissa.buffer);
		// Appends bytes to condition
		for (let b = 0; b < bytes.length; ++b) {
			let hexByte = bytes[b].toString(16);
			condition += (hexByte.length < 2 ? "0" : "") + hexByte
		}
		// Adds newline and adds to condition list, then increments condition index
		conditions += condition + "\n";
		++conditionIndex;
	}
	// Then copies final conditions list to clipboard, and prints the the number of conditions copied
	navigator.clipboard.writeText(conditions);
	document.getElementById("status").innerText = "(Copied " + (conditionIndex - initConditionIndex) + "/" + (table.rows.length - 1) + " conditions" + (conditionIndex > 99 ? " due to Cubiomes Viewer's space limits" : "") + ".)";
}
