export const DarkTheme = {
    bg_main: "#171F2BFF", // Editor background
    bg_panel: "#10151dff", // The panel, status bar and title bar backgrounds
    bg_panel_hover: "#242e3f55",
    bg_panel_selected: "#242e3fff",
    bg_panel_active: "#1f2939ff",
    bg_drop_target: "#44506655",
    bg_search_match: "#83431466",

    text: "#D9DFE7FF", // the main text color
    text_muted: "#A4AFBDFF",
    text_disabled: "#738295ff",
    text_accent: "#B895FDFF",

    border: "#333e4f",
    border_variant: "#333e4f",
    border_focused: "#a87ffb", // Generally with a hint of the accent color

    scroll_thumb_bg: "#E6ECF618",
    scroll_thumb_bg_hover: "#E6ECF626",
    scroll_thumb_border: "#0000",
    scroll_track_bg: "#0000",
    scroll_track_border: "#333e4fff",

    panel_indent: "#333e4fff",
    panel_indent_active: "#485e6fff",
    editor_indent: "#303B4Aff",
    editor_indent_active: "#475365ff",
    editor_foreground: "#D9DFE7FF", // Text color if no syntax highlighting is chosen for example with plain text files
    editor_active_line_bg: "#1F2939",
    editor_line_number_fg: "#475365FF",
    editor_line_number_fg_active: "#D9DFE7FF",
    editor_similar_token_bg: "#74ade81a", // The bg of tokens similar to the one currently in focus by the cursor
    editor_wrapping_brackets_bg: "#004b5e99",

    // Terminal colors config
    terminal: {
        background: "#10151D",
        foreground: "#dce0e5ff",
        link_text_hover: "#74ade8ff", // When ctrl hovered over a link in the terminal
        // bright_foreground: "#dce0e5ff",
        // dim_foreground: "#282c33ff",

        // // ANSI Colors
        // black: "#585B70",
        // bright_black: "#45475a",
        // dim_black: "#35374a",
        // red: "#f38ba8",
        // bright_red: "#f38ba8",
        // dim_red: "#D3688",
        // green: "#a6e3a1",
        // bright_green: "#a6e3a1",
        // dim_green: "#86C381",
        // yellow: "#f9e2af",
        // bright_yellow: "#f9e2af",
        // dim_yellow: "#D9C28f",
        // blue: "#89b4fa",
        // bright_blue: "#89b4fa",
        // dim_blue: "#6994Da",
        // magenta: "#f5c2e7",
        // bright_magenta: "#f5c2e7",
        // dim_magenta: "#D5A2C7",
        // cyan: "#94e2d5",
        // bright_cyan: "#94e2d5",
        // dim_cyan: "#74C2B5",
        // white: "#a6adc8",
        // bright_white: "#bac2de",
        // dim_white: "#868DA8",
    },

    // VCS
    vcs_added_bg: "#17b877",
    vcs_modified_bg: "#708fff",
    vcs_deleted_bg: "#f76769",

    conflict_fg: "#ffc26e",
    created_fg: "#17b877",
    deleted_fg: "#f76769",
    error_fg: "#f76769",
    hidden_fg: "#878a98ff",
    hint_fg: "#788ca6ff",
    ignored_fg: "#878a98ff",
    info_fg: "#74ade8",
    modified_fg: "#708fff",
    predictive_fg: "#5a6a87ff",
    renamed_fg: "#74ade8ff",
    success_fg: "#17b877",
    unreachable_fg: "#a9afbcff",
    warning_fg: "#ffc26e",

    players: [
        {
            cursor: "#74ade8ff",
            background: "#74ade8ff",
            selection: "#74ade83d",
        },
        {
            cursor: "#b477cfff",
            background: "#b477cfff",
            selection: "#b477cf3d",
        },
        {
            cursor: "#6eb4bfff",
            background: "#6eb4bfff",
            selection: "#6eb4bf3d",
        },
    ],

    // The syntax color palette
    syntax: {
        white: "#d9dfe7ff",
        red: "#fd8da3ff",
        blue: "#92a9ffff",
        purple: "#bd9cfeff",
        yellow: "#ffd395ff",
        sky: "#85cdf1ff",
        green: "#77d5a3ff",
        light_green: "#94e2d5ff",
        brown: "#f5e0dcff",
        muted_grey: "#9399b2ff",
        very_muted_grey: "#6c7086ff",
    },
};

export const LightTheme = {
    bg_main: "#FFFFFF", // Editor background
    bg_panel: "#F4F7FD", // The panel, status bar and title bar backgrounds
    bg_panel_hover: "#E7EBF2",
    bg_panel_selected: "#D9DFE7",
    bg_panel_active: "#D9DFE7",
    bg_drop_target: "#9070F055",
    bg_search_match: "#FFE7C5",

    text: "#1f2939", // the main text color
    text_muted: "#4D5A6D",
    text_disabled: "#8B98A9",
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
    editor_foreground: "#1F2939", // Text color if no syntax highlighting is chosen for example with plain text files
    editor_active_line_bg: "#F4F7FD",
    editor_line_number_fg: "#BFC7D2",
    editor_line_number_fg_active: "#1F2939",
    editor_similar_token_bg: "#E6EAF7", // The bg of tokens similar to the one currently in focus by the cursor
    editor_wrapping_brackets_bg: "#004b5e99",

    // Terminal colors config
    terminal: {
        background: "#eff1f5",
        foreground: "#1f2939",
        link_text_hover: "#6f4cde", // When ctrl hovered over a link in the terminal
        // bright_foreground: "#dce0e5ff",
        // dim_foreground: "#4c4f69",

        // ANSI Colors
        // black: "#282c33ff",
        // bright_black: "#525561ff",
        // dim_black: "#282c33ff",
        // red: "#D20F39",
        // bright_red: "#FF3355",
        // dim_red: "#D20F39",
        // green: "#41d181",
        // bright_green: "#4d6140ff",
        // dim_green: "#d1e0bfff",
        // yellow: "#dec184ff",
        // bright_yellow: "#e5c07bff",
        // dim_yellow: "#f1dfc1ff",
        // blue: "#74ade8ff",
        // bright_blue: "#385378ff",
        // dim_blue: "#bed5f4ff",
        // magenta: "#be5046ff",
        // bright_magenta: "#5e2b26ff",
        // dim_magenta: "#e6a79eff",
        // cyan: "#6eb4bfff",
        // bright_cyan: "#3a565bff",
        // dim_cyan: "#b9d9dfff",
        // white: "#dce0e5ff",
        // bright_white: "#dce0e5ff",
        // dim_white: "#575d65ff",
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
    predictive_fg: "#5a6a87ff",
    renamed_fg: "#5173f1",
    success_fg: "#17975f",
    unreachable_fg: "#a9afbc",
    warning_fg: "#dec184",

    players: [
        {
            cursor: "#74ade8ff",
            background: "#74ade8ff",
            selection: "#74ade83d",
        },
        {
            cursor: "#b477cfff",
            background: "#b477cfff",
            selection: "#b477cf3d",
        },
        {
            cursor: "#6eb4bfff",
            background: "#6eb4bfff",
            selection: "#6eb4bf3d",
        },
    ],

    // The syntax color palette
    syntax: {
        white: "#1F2939",
        red: "#C43058",
        blue: "#264DCB",
        purple: "#6F4CDE",
        yellow: "#D07826",
        sky: "#0075A2",
        green: "#007B49",
        light_green: "#007B49",
        brown: "#f5e0dcff",
        muted_grey: "#9399b2ff",
        very_muted_grey: "#6c7086ff",
    },
};

export type ThemeColors = typeof DarkTheme;
