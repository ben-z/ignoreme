/**
 * http://stackoverflow.com/a/1885660/4527337
 * finds the intersection of
 * two arrays in a simple fashion.
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is
 *    n = MIN(a.length(), b.length())
 */
module.exports.intersection = function(a, b) {
	let ai=0, bi=0;
	let result = [];

	while( ai < a.length && bi < b.length )	{
		if (a[ai] < b[bi] ) {
 ai++;
}		else if (a[ai] > b[bi] ) {
 bi++;
}		else /* they're equal */
		{
			result.push(a[ai]);
			ai++;
			bi++;
		}
	}

	return result;
};

// http://stackoverflow.com/a/3629861/4527337
module.exports.union = function(x, y) {
	let obj = {};
	for (var i = x.length-1; i >= 0; -- i)
		obj[x[i]] = x[i];
	for (var i = y.length-1; i >= 0; -- i)
		obj[y[i]] = y[i];
	let res = [];
	for (let k in obj) {
		if (obj.hasOwnProperty(k))  // <-- optional
			res.push(obj[k]);
	}
	return res;
};

// http://stackoverflow.com/a/1187628/4527337
module.exports.difference = function(a1, a2) {
	let a = [], diff = [];

	for (var i = 0; i < a1.length; i++) {
		a[a1[i]] = true;
	}

	for (var i = 0; i < a2.length; i++) {
		if (a[a2[i]]) {
			delete a[a2[i]];
		} else {
			a[a2[i]] = true;
		}
	}

	for (let k in a) {
		diff.push(k);
	}

	return diff;
};
