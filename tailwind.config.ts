import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'xs': '475px',
				'sm': '640px', 
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				'xs': '475px',
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
				'display': ['Orbitron', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Terminal Colors
				terminal: {
					green: 'hsl(var(--terminal-green))',
					dim: 'hsl(var(--terminal-green-dim))',
					bright: 'hsl(var(--terminal-green-bright))',
					glow: 'hsl(var(--terminal-green-glow))',
				},
				matrix: {
					green: 'hsl(var(--matrix-green))',
					dark: 'hsl(var(--matrix-dark))',
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100vh)', opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'phosphor-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) contrast(1.2)',
						textShadow: '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary))'
					},
					'50%': { 
						filter: 'brightness(1.1) contrast(1.3)',
						textShadow: '0 0 8px hsl(var(--primary)), 0 0 15px hsl(var(--primary))'
					}
				},
				'terminal-boot': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '0.5', transform: 'scale(1.05)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typewriter': 'typewriter 3s steps(40, end) forwards',
				'blink': 'blink 1s infinite',
				'glitch': 'glitch 2s infinite',
				'matrix-fall': 'matrix-fall 3s linear infinite',
				'phosphor-glow': 'phosphor-glow 2s ease-in-out infinite',
				'terminal-boot': 'terminal-boot 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
