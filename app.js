// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (function () {
	// Item Constructor
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};
	// Data Structures / States
	const data = {
		items: [
			{ id: 0, name: 'Steak Dinner', calories: 1200 },
			{ id: 1, name: 'Cookie', calories: 400 },
			{ id: 2, name: 'Eggs', calories: 300 }
		],
		currentItem: null,
		calories: 0
	};

	// Public Methods
	return {
		getItems: function () {
			return data.items;
		},
		logData: function () {
			return data;
		}
	};
})();

// UI CONTROLLER
const UICtrl = (function () {
	const UISelectors = {
		itemList: '#item-list'
	};

	// Public Methods
	return {
		populateItemList: function (items) {
			let html = ``;

			items.forEach((item) => {
				html += `
					<li class="collection-item" id="item-${item.id}">
						<strong>${item.name}: </strong><em>${item.calories} Calories</em>
						<a href="#" class="secondary-content">
							<i class="fa fa-pencil-alt"></i>
						</a>
					</li>
				`;
			});

			// Insert list items
			document.querySelector(UISelectors.itemList).innerHTML = html;
		}
	};
})();

// APP
const App = (function (ItemCtrl, UICtrl) {
	// Public Methods
	return {
		init: function () {
			// Fetch items from data structure
			const items = ItemCtrl.getItems();

			// Populate list with items
			UICtrl.populateItemList(items);
		}
	};
})(ItemCtrl, UICtrl);

// INITIALIZE
App.init();
