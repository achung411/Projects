StoreApp.factory('CustomerFactory', function ($http) {
	var factory = {};
	var customers = [
		{name: "Ksenia Solo", created_at: Date.now()},
		{name: "Bill Murray", created_at: Date.now()},
		{name: "Deborah Ann Woll", created_at: Date.now()}
	];

	factory.show = function () {
		return customers;
	}

	factory.create = function (new_cust) {
		console.log(new_cust);
		customers.push({
			name: new_cust.name,
			created_at: Date.now()
		})
		console.log(customers);
	}

	factory.destroy = function (id) {
		customers.splice(id, 1);
	}
	return factory;
})