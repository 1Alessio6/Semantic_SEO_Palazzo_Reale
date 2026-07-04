/*1639657830000*/












AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['en_US'] = 'inglese\x20\x28Stati\x20Uniti\x29';
			direction['en_US'] = 'ltr';

		

			available['it_IT'] = 'italiano\x20\x28Italia\x29';
			direction['it_IT'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: []
	}
);