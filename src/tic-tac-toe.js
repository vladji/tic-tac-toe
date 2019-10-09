class TicTacToe {
	constructor() {
		this.matrix = [[], [], []];
		this.player = 'x';
	}

	getCurrentPlayerSymbol() {
		return this.player;
	}

	nextTurn(rowIndex, columnIndex) {
		if (this.matrix[rowIndex][columnIndex]) {
			return;
		} else {
			this.matrix[rowIndex][columnIndex] = this.player;
			(this.player === 'x') ? this.player = 'o' : this.player = 'x';
		}
	}

	isFinished() {
		const winner = this.getWinner();
		const fullField = this.noMoreTurns();
		if (winner || fullField) return true;
		return false;
	}

	getWinner() {
		const field = this.matrix;
		for (let i = 0; i < field.length; i++) {
			if (i === 0) {
				// check diagonal winner from left to right
				if (field[i][i] === field[i + 1][i + 1] && field[i][i] === field[i + 2][i + 2]) {
					if (field[i][i]) return field[i][i];
				}
				// check column winner
				for (let k = 0; k < field.length; k++) {
					if (field[i][k] === field[i + 1][k] && field[i][k] === field[i + 2][k]) {
						if (field[i][k]) return field[i][k];
					}
				}
			}
			// check diagonal winner from right to left
			if (i === 2) {
				if (field[i][i - 2] === field[i - 1][i - 1] && field[i][i - 2] === field[i - 2][i]) {
					if (field[i][i - 2]) return field[i][i - 2];
				}
			}
			//  check row winner
			for (let k = 0; k === 0; k++) {
				if (field[i][k] === field[i][k + 1] && field[i][k] === field[i][k + 2]) {
					if (field[i][k]) return field[i][k];
				}
			}
		}
		return null;
	}

	noMoreTurns() {
		const str = this.matrix.join(',');
		const draw = (str.length === 17) ? true : false;
		return draw;
	}

	isDraw() {
		const fullField = this.noMoreTurns();
		const winner = this.getWinner();

		if (!winner && fullField) return true;
		return false;
	}

	getFieldValue(rowIndex, colIndex) {
		if (this.matrix[rowIndex][colIndex]) {
			return this.matrix[rowIndex][colIndex];
		} else {
			return null;
		}
	}
}

module.exports = TicTacToe;
