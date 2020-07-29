const customSizes = {
    c0: '4px',
    c1: '6px',
    c2: '11px',
    c3: '14px',
    c4: '26px',
    c5: '30px',
    c6: '36px',
    c7: '54px',
    c8: '90px',
    c9: '96px',
    c10: '100px',
    c11: '125px',
    c12: '86px',
    c13: '68px',
    c14: '675px',
    c15: '13rem',
    c16: '250px',
    c17: '4.5rem',
};

module.exports = {
    purge: false,
    theme: {
        extend: {
            fontSize: {
                f0: ['14px', '120%'],
                sm: ['15px', '120%'],
                f1: ['18px', '120%'],
                f2: ['20px', '120%'],
                f3: ['22px', '120%'],
                f4: ['25px', '120%'],
                f5: ['27px', '120%'],
                f6: ['34px', '120%'],
                f7: ['32px', '120%'],
            },
            padding: {
                ...customSizes,
            },
            margin: {
                ...customSizes,
                '-50': '-50%',
            },
            width: {
                ...customSizes,
                '60p': '3.75rem',
            },
            minWidth: {
                320: '20rem',
                560: '35rem',
            },
            maxWidth: {
                320: '20rem',
                560: '35rem',
            },
            minWidth: {
                320: '20rem',
                560: '35rem',
            },
            height: {
                ...customSizes,
                '60p': '3.75rem',
            },
            colors: {
                blue: {
                    light: '#9EDBFF',
                    pale: '#9AABD9',
                    dark: '#0011A8',
                },
                red: {
                    page: '#FFDFE5',
                },
                gray: {
                    light: '#4F4F4F',
                    dark: '#F2F2F2',
                },
            },
            inset: {
                c1: '6px',
                c2: '12px',
                c3: '24px',
                50: '50%',
            },
        },
    },
    variants: {
        zIndex: ['hover'],
        margin: ['responsive', 'last', 'first'],
        display: ['responsive', 'hover'],
    },
    plugins: [],
};
