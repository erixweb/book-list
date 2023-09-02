export type APIResults = {
	library: Library[]
}

export type Library = {
	book: Book
}

export type Book = {
	title: string
	href: string
	pages: number
	genre: string
	cover: string
	synopsis: string
	year: number
	ISBN: string
	author: Author
}

export type Author = {
	name: string
	otherBooks: string[]
}