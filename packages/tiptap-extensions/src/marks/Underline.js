import { Mark } from 'tiptap'
import { toggleMark } from 'tiptap-commands'

export default class UnderlineMark extends Mark {

	get name() {
		return 'underline'
	}

	get schema() {
		return {
			parseDOM: [
				{
					tag: 'u',
				},
				{
					style: 'text-decoration',
					getAttrs: value => value === 'underline',
				},
			],
			toDOM: () => ['u', 0],
		}
	}

	keys({ type }) {
		return {
			'Mod-u': toggleMark(type),
		}
	}

	command({ type }) {
		return toggleMark(type)
	}

}
