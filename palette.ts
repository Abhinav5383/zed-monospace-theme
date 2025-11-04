export const DarkTheme = {
	bg_main: "#171f2b", // Editor background
	// bg_panel: "#10151d", // The panel, status bar and title bar backgrounds
	bg_panel: "#10151d", // The panel, status bar and title bar backgrounds
	bg_panel_hover: "#242e3f55",
	bg_panel_selected: "#242e3f",
	bg_panel_active: "#1f2939",
	bg_drop_target: "#44506655",
	bg_search_match: "#83431466",

	text: "#d9dfe7", // the main text color
	text_muted: "#a4afbd",
	text_disabled: "#738295",
	text_accent: "#b895fd",

	border: "#333e4f",
	border_variant: "#333e4f",
	border_focused: "#a87ffb", // Generally with a hint of the accent color

	scroll_thumb_bg: "#e6ecf618",
	scroll_thumb_bg_hover: "#e6ecf626",
	scroll_thumb_border: "#0000",
	scroll_track_bg: "#0000",
	scroll_track_border: "#333e4f",

	panel_indent: "#333e4f",
	panel_indent_active: "#485e6f",
	editor_indent: "#303b4a",
	editor_indent_active: "#475365",
	editor_foreground: "#d9dfe7", // Text color if no syntax highlighting is chosen for example with plain text files
	editor_active_line_bg: "#1f2939",
	editor_line_number_fg: "#475365",
	editor_line_number_fg_active: "#d9dfe7",
	editor_similar_token_bg: "#74ade81a", // The bg of tokens similar to the one currently in focus by the cursor
	editor_wrapping_brackets_bg: "#004b5e99",

	// Terminal colors config
	terminal: {
		background: "#10151d",
		foreground: "#dce0e5",
		link_text_hover: "#74ade8", // When ctrl hovered over a link in the terminal
		// bright_foreground: "#dce0e5",
		// dim_foreground: "#282c33",

		// // ANSI Colors
		// black: "#585b70",
		// bright_black: "#45475a",
		// dim_black: "#35374a",
		// red: "#f38ba8",
		// bright_red: "#f38ba8",
		// dim_red: "#d3688",
		// green: "#a6e3a1",
		// bright_green: "#a6e3a1",
		// dim_green: "#86c381",
		// yellow: "#f9e2af",
		// bright_yellow: "#f9e2af",
		// dim_yellow: "#d9c28f",
		// blue: "#89b4fa",
		// bright_blue: "#89b4fa",
		// dim_blue: "#6994da",
		// magenta: "#f5c2e7",
		// bright_magenta: "#f5c2e7",
		// dim_magenta: "#d5a2c7",
		// cyan: "#94e2d5",
		// bright_cyan: "#94e2d5",
		// dim_cyan: "#74c2b5",
		// white: "#a6adc8",
		// bright_white: "#bac2de",
		// dim_white: "#868da8",
	},

	// VCS
	vcs_added_bg: "#17b877",
	vcs_modified_bg: "#708fff",
	vcs_deleted_bg: "#f76769",

	conflict_fg: "#ffc26e",
	created_fg: "#17b877",
	deleted_fg: "#f76769",
	error_fg: "#f76769",
	hidden_fg: "#878a98",
	hint_fg: "#788ca6",
	ignored_fg: "#878a98",
	info_fg: "#74ade8",
	modified_fg: "#708fff",
	predictive_fg: "#5a6a87",
	renamed_fg: "#74ade8",
	success_fg: "#17b877",
	unreachable_fg: "#a9afbc",
	warning_fg: "#ffc26e",

	players: [
		{
			cursor: "#74ade8",
			background: "#74ade8",
			selection: "#74ade83d",
		},
		{
			cursor: "#b477cf",
			background: "#b477cf",
			selection: "#b477cf3d",
		},
		{
			cursor: "#6eb4bf",
			background: "#6eb4bf",
			selection: "#6eb4bf3d",
		},
	],

	// The syntax color palette
	syntax: {
		white: "#d9dfe7",
		red: "#fd8da3",
		blue: "#92a9ff",
		purple: "#bd9cfe",
		yellow: "#ffd395",
		sky: "#85cdf1",
		green: "#77d5a3",
		light_green: "#94e2d5",
		brown: "#f5e0dc",
		muted_grey: "#9399b2",
		very_muted_grey: "#6c7086",
	},
};

export const LightTheme = {
	bg_main: "#ffffff", // Editor background
	bg_panel: "#f4f7fd", // The panel, status bar and title bar backgrounds
	bg_panel_hover: "#e7ebf2",
	bg_panel_selected: "#d9dfe7",
	bg_panel_active: "#d9dfe7",
	bg_drop_target: "#9070f055",
	bg_search_match: "#ffe7c5",

	text: "#1f2939", // the main text color
	text_muted: "#4a5a6d",
	text_disabled: "#8b98a9",
	text_accent: "#6f4cde",

	border: "#d9dfe7",
	border_variant: "#d9dfe7",
	border_focused: "#a87ffb", // Generally with a hint of the accent color

	scroll_thumb_bg: "#6a737d44",
	scroll_thumb_bg_hover: "#6a737d60",
	scroll_thumb_border: "#0000",
	scroll_track_bg: "#0000",
	scroll_track_border: "#d9dfe7",

	panel_indent: "#e7ebf2",
	panel_indent_active: "#bfc7d2",
	editor_indent: "#e7ebf2",
	editor_indent_active: "#bfc7d2",
	editor_foreground: "#1f2939", // Text color if no syntax highlighting is chosen for example with plain text files
	editor_active_line_bg: "#f4f7fd",
	editor_line_number_fg: "#bfc7d2",
	editor_line_number_fg_active: "#1f2939",
	editor_similar_token_bg: "#e6eaf7", // The bg of tokens similar to the one currently in focus by the cursor
	editor_wrapping_brackets_bg: "#004b5e99",

	// Terminal colors config
	terminal: {
		background: "#eff1f5",
		foreground: "#1f2939",
		link_text_hover: "#6f4cde", // When ctrl hovered over a link in the terminal
		// bright_foreground: "#dce0e5",
		// dim_foreground: "#4c4f69",

		// ANSI Colors
		// black: "#282c33",
		// bright_black: "#525561",
		// dim_black: "#282c33",
		// red: "#d20f39",
		// bright_red: "#ff3355",
		// dim_red: "#d20f39",
		// green: "#41d181",
		// bright_green: "#4d6140",
		// dim_green: "#d1e0bf",
		// yellow: "#dec184",
		// bright_yellow: "#e5c07b",
		// dim_yellow: "#f1dfc1",
		// blue: "#74ade8",
		// bright_blue: "#385378",
		// dim_blue: "#bed5f4",
		// magenta: "#be5046",
		// bright_magenta: "#5e2b26",
		// dim_magenta: "#e6a79e",
		// cyan: "#6eb4bf",
		// bright_cyan: "#3a565b",
		// dim_cyan: "#b9d9df",
		// white: "#dce0e5",
		// bright_white: "#dce0e5",
		// dim_white: "#575d65",
	},

	// VCS
	vcs_added_bg: "#17975f",
	vcs_deleted_bg: "#e06c76",
	vcs_modified_bg: "#d3b020",

	conflict_fg: "#c16f23",
	created_fg: "#17975f",
	deleted_fg: "#df4047",
	error_fg: "#df4047",
	hidden_fg: "#8b98a9",
	hint_fg: "#788ca6",
	ignored_fg: "#8b98a9",
	info_fg: "#5173f1",
	modified_fg: "#c16f23",
	predictive_fg: "#5a6a87",
	renamed_fg: "#5173f1",
	success_fg: "#17975f",
	unreachable_fg: "#a9afbc",
	warning_fg: "#dec184",

	players: [
		{
			cursor: "#74ade8",
			background: "#74ade8",
			selection: "#74ade83d",
		},
		{
			cursor: "#b477cf",
			background: "#b477cf",
			selection: "#b477cf3d",
		},
		{
			cursor: "#6eb4bf",
			background: "#6eb4bf",
			selection: "#6eb4bf3d",
		},
	],

	// The syntax color palette
	syntax: {
		white: "#1f2939",
		red: "#c43058",
		blue: "#264dcb",
		purple: "#6f4cde",
		yellow: "#d07826",
		sky: "#0075a2",
		green: "#007b49",
		light_green: "#007b49",
		brown: "#f5e0dc",
		muted_grey: "#9399b2",
		very_muted_grey: "#6c7086",
	},
};

export type ThemeColors = typeof DarkTheme;
