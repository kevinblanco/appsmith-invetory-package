export default {
	validateAdjustmentData(adjustmentData) {
		if (!adjustmentData.productId) {
			return { isValid: false, message: 'Product is required.' };
		}
		if (!['Add', 'Remove'].includes(adjustmentData.adjustmentType)) {
			return { isValid: false, message: 'Adjustment Type must be "Add" or "Remove".' };
		}
		if (isNaN(adjustmentData.quantity) || adjustmentData.quantity <= 0) {
			return { isValid: false, message: 'Quantity must be a positive number.' };
		}
		return { isValid: true };
	},
	// Calculate new stock level after adjustment
	calculateNewStockLevel(currentStock, adjustmentType, quantity) {
		if (adjustmentType === 'Add') {
			return currentStock + quantity;
		} else if (adjustmentType === 'Remove') {
			return currentStock - quantity;
		} else {
			showAlert('Invalid adjustment type.');
			return null;
		}
	}
}