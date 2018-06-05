import HomePage from '@/views/home'
import JoinPage from '@/views/join'
import SeekPage from '@/views/seek'
import UserPage from '@/views/user'
import LoginPage from '@/views/login'
import WorkPage from '@/views/work'

import ProjectLayout from '@/layout/ProjectLayout'

export default {
	routers: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: ProjectLayout(HomePage)
		},
		{
			path: '/seek',
			component: ProjectLayout(SeekPage)
		},
		{
			path: '/join',
			component: ProjectLayout(JoinPage)
		},
		{
			path: '/user',
			component: ProjectLayout(UserPage, {
				Authority: true
			})
		},
		{
			path: '/login',
			component: ProjectLayout(LoginPage)
		},
		{
			path: '/work',
			component: ProjectLayout(WorkPage)
		}
	]
}