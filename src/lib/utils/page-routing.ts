export const pageRoutingHandler = () => ({
	about: '/about',
	blogs: '/blogs',
	blogsWithId: (id: string) => `/blogs/${id}`,
	projects: '/projects',
	projectsWithId: (id: string) => `/projects/${id}`,
	home: '/'
});
