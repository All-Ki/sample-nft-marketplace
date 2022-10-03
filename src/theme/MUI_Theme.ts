import { extendTheme } from '@mui/joy';


export const AppTheme = extendTheme({
	components: {
		JoyCard :{
			styleOverrides: {
				root: {
					backgroundColor: 'var(--main-bg-lighter)',
				},
			},
		},
		JoyCardOverflow: {
			styleOverrides: {
				root: {
					backgroundColor: 'var(--main-bg-lighter)',
				},
			},
		},
		JoyTypography:{
			styleOverrides: {
				root: {
					color: 'white'
				}
			}
		}
	}
});