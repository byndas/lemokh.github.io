// nothing to import, exports to many files

export function onBoard(id) {
	if (id[0] >= 0) {
		if (id[0] <= 7) {
			if (id[1] >= 0) {
				if (id[1] <= 7) {
					return true;
				}
			}
		}
	}
}