const list = [
	{
		name   : '中文(简体)',
		file   : 'cn',
		locale : [ 'cn', 'cn-cn' ]
	}, // hans
	{
		name   : '中文(繁体)',
		file   : 'tw',
		locale : [ 'tw', 'tw-tw' ]
	}, // hant
	{
		name   : 'English',
		file   : 'en',
		locale : [ 'en', 'en-en' ]
	},
	{
		name   : 'čeština',
		file   : 'cs',
		locale : [ 'cs', 'cs-cs' ]
	},
	{
		name   : 'hrvatski',
		file   : 'hr',
		locale : [ 'hr', 'hr-hr' ]
	},
	{
		name   : 'Dansk',
		file   : 'dk',
		locale : [ 'dk', 'dk-dk' ]
	},
	{
		name   : 'Français',
		file   : 'fr',
		locale : [ 'fr', 'fr-fr' ]
	},
	{
		name   : 'Deutsch',
		file   : 'de',
		locale : [ 'de', 'de-de' ]
	},
	{
		name   : 'ελληνικά',
		file   : 'el',
		locale : [ 'el', 'el-el' ]
	},
	{
		name   : 'हिंदी',
		file   : 'hi',
		locale : [ 'hi', 'hi-hi' ]
	},
	{
		name   : 'Magyar',
		file   : 'hu',
		locale : [ 'hu', 'hu-hu' ]
	},
	{
		name   : 'Italiano',
		file   : 'it',
		locale : [ 'it', 'it-it' ]
	},
	{
		name   : 'қазақ тілі',
		file   : 'kk',
		locale : [ 'kk', 'kk-kz	' ]
	},
	{
		name   : 'Latvian',
		file   : 'lv',
		locale : [ 'lv', 'lv-lv' ]
	},
	{
		name   : 'Norsk bokmal',
		file   : 'nb',
		locale : [ 'nb', 'nb-no' ]
	},
	{
		name   : 'Polski',
		file   : 'pl',
		locale : [ 'pl', 'pl-pl' ]
	},
	{
		name   : 'Protuguês',
		file   : 'pt',
		locale : [ 'pt', 'pt-pt' ]
	},
	{
		name   : 'româna',
		file   : 'ro',
		locale : [ 'ro', 'ro-ro' ]
	},
	{
		name   : 'Русский',
		file   : 'ru',
		locale : [ 'ru', 'ru-ru' ]
	},
	{
		name   : 'Español',
		file   : 'es',
		locale : [ 'es', 'es-es' ]
	},
	{
		name   : 'Turkish',
		file   : 'tr',
		locale : [ 'tr', 'tr-tr' ]
	},
	{
		name   : 'українська',
		file   : 'uk',
		locale : [ 'uk', 'uk-uk' ]
	}
];

export const detect = () =>
{
	const localeFull = (navigator.language || navigator.browserLanguage).toLowerCase();

	// const localeCountry = localeFull.split(/[-_]/)[0];

	// const localeRegion = localeFull.split(/[-_]/)[1] || null;

	return localeFull;
};

export const getList = () => list;

export const loadOne = (locale) =>
{
	let res = {};

	try
	{
		res = list.filter((item) =>
			item.locale.includes(locale) || item.locale.includes(locale.split(/[-_]/)[0])
		)[0];

		res.messages = require(`./${res.file}`);
	}

	catch
	{

		res = list.filter((item) => item.locale.includes('cn'))[0];

		res.messages = require(`./${res.file}`);
	}

	return res;

};
