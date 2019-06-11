export const presets: any = [
    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],

                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ]
                    },

                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "1fr"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 2
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],

                        cols: [
                            "33.1fr",
                            "33.1fr",
                            "33.1fr"
                        ],

                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "1fr"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 2
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },

                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },

                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },

                            xs: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },

                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "1fr",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ],

                    },

                    xs: {
                        rows: [
                            "auto",
                            "1fr",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 2
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 2,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "1fr",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ],

                    },

                    xs: {
                        rows: [
                            "auto",
                            "1fr",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 2
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],

                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ],
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr"
                        ],
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            xs: {
                                position: {
                                    col: 1,
                                    row: 4
                                },
                                span: {
                                    cols: 3,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ],
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ],
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 3,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 4
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "1fr",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr"
                        ],
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "footer",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 4
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],
                        cols: [
                            "1fr",
                            "1fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    xs: {
                        rows: [
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr",
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],
                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 3,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },


            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },

            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "1fr"
                        ],
                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "header",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 3,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 2,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "1fr"
                        ],

                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 4
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "1fr",
                            "1fr",
                            "1fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "3fr",
                            "6fr",
                            "3fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },


    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "4fr",
                            "8fr"
                        ]
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "8fr",
                            "4fr"
                        ],
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ],
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],

                        cols: [
                            "3fr",
                            "1fr"
                        ],

                    },

                    xs: {
                        rows: [
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],

                        cols: [
                            "1fr",
                            "3fr"
                        ],

                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto"
                        ],

                        cols: [
                            "1fr"
                        ],

                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "aside",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    md: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "1fr",
                            "1fr",
                            "1fr",
                            "1fr"
                        ],
                    },
                    xs: {
                        rows: [
                            "auto",
                            "auto",
                            "auto",
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ],
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 2,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 2
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 3,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 3
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            },
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            md: {
                                position: {
                                    col: 4,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            },
                            xs: {
                                position: {
                                    col: 1,
                                    row: 4
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                }
                            }
                        }
                    }
                }
            }

        ]
    },

    {
        type: "grid",
        styles: {
            instance: {
                grid: {
                    xs: {
                        rows: [
                            "auto"
                        ],
                        cols: [
                            "1fr"
                        ]
                    }
                }
            }
        },
        nodes: [
            {
                type: "grid-cell",
                role: "article",
                styles: {
                    instance: {
                        "grid-cell": {
                            xs: {
                                position: {
                                    col: 1,
                                    row: 1
                                },
                                span: {
                                    cols: 1,
                                    rows: 1
                                },
                                alignment: {
                                    vertical: "center",
                                    horizontal: "center"
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
];