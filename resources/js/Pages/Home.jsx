import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Box,
    Grid,
    Chip,
    Paper,
    Avatar,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import {
    School,
    Business,
    ChildCare,
    Code,
    Palette,
    Speed,
} from "@mui/icons-material";
import React from "react";

function Home() {
    const designs = [
        {
            title: "ProTraining Center",
            subtitle: "Professional Development Platform",
            description:
                "Comprehensive adult learning platform with course catalogs, expert instructors, and corporate training solutions. Features a clean, professional interface built entirely with Material-UI.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            route: "/training-center",
            color: "#1e3a8a",
            gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
            tech: ["Material-UI", "Professional", "Corporate"],
            badge: "DesignOne",
            icon: <Business />,
            pages: ["Courses", "Corporate", "About"],
        },
        {
            title: "Little Learners Preschool",
            subtitle: "Early Childhood Education Center",
            description:
                "Vibrant, engaging preschool website with program details, daily schedules, and teacher profiles. Features playful gradients and a warm, welcoming design built with Material-UI.",
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
            route: "/pre-school",
            color: "#ec4899",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
            tech: ["Material-UI", "Colorful", "Friendly"],
            badge: "DesignTwo",
            icon: <ChildCare />,
            pages: ["Programs", "Schedule", "Teachers"],
        },
        {
            title: "Excellence Academy",
            subtitle: "K-12 Educational Institution",
            description:
                "Traditional, prestigious academic institution featuring comprehensive programs, distinguished faculty, and admissions information. Elegant design with serif typography and rich colors.",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop",
            route: "/school",
            color: "#991b1b",
            gradient: "linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%)",
            tech: ["Material-UI", "Traditional", "Academic"],
            badge: "DesignThree",
            icon: <School />,
            pages: ["Academics", "Admissions", "Campus Life", "About"],
        },
    ];

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
            {/* Header */}
            <Box
                sx={{
                    bgcolor: "white",
                    borderBottom: "1px solid #e5e7eb",
                    py: 3,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "#6366f1",
                                    width: 48,
                                    height: 48,
                                }}
                            >
                                <School />
                            </Avatar>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 800, color: "#0f172a" }}
                                >
                                    Educational Website Portfolio
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontWeight: 500 }}
                                >
                                    Three Complete Design Systems
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            component={Link}
                            href="/admin"
                            variant="contained"
                            sx={{
                                bgcolor: "#6366f1",
                                "&:hover": { bgcolor: "#4f46e5" },
                                px: 3,
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Admin Dashboard
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    py: 12,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.1,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <Container
                    maxWidth="xl"
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            maxWidth: "900px",
                            mx: "auto",
                        }}
                    >
                        <Chip
                            label="Portfolio Showcase"
                            sx={{
                                bgcolor: "rgba(255,255,255,0.2)",
                                color: "white",
                                fontWeight: 700,
                                fontSize: "0.875rem",
                                mb: 3,
                                backdropFilter: "blur(10px)",
                            }}
                        />
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 3,
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                lineHeight: 1.2,
                            }}
                        >
                            Educational Website Designs
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                opacity: 0.95,
                                lineHeight: 1.8,
                                fontSize: { xs: "1.1rem", md: "1.25rem" },
                                fontWeight: 400,
                            }}
                        >
                            Explore three professionally crafted educational
                            website designs, each tailored for different
                            audiences and purposes. Built with modern
                            technologies and best practices.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                flexWrap: "wrap",
                                mb: 4,
                            }}
                        >
                            <Chip
                                icon={
                                    <Code sx={{ color: "white !important" }} />
                                }
                                label="Laravel 12"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    fontWeight: 600,
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                }}
                            />
                            <Chip
                                icon={
                                    <Code sx={{ color: "white !important" }} />
                                }
                                label="Inertia.js 2.0"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    fontWeight: 600,
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                }}
                            />
                            <Chip
                                icon={
                                    <Code sx={{ color: "white !important" }} />
                                }
                                label="React 19"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    fontWeight: 600,
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                }}
                            />
                            <Chip
                                icon={
                                    <Palette
                                        sx={{ color: "white !important" }}
                                    />
                                }
                                label="Material-UI 7"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    fontWeight: 600,
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Design Cards */}
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: "#0f172a",
                        }}
                    >
                        Featured Designs
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
                    >
                        Each design represents a unique approach to educational
                        website development with full functionality and multiple
                        pages
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {designs.map((design, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 20px 60px rgba(0,0,0,0.12)",
                                        borderColor: design.color,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 8,
                                            backgroundImage: design.gradient,
                                            zIndex: 2,
                                        }}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="280"
                                        image={design.image}
                                        alt={design.title}
                                        sx={{
                                            objectFit: "cover",
                                            transition: "transform 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                        }}
                                    />
                                    <Chip
                                        label={design.badge}
                                        size="small"
                                        sx={{
                                            position: "absolute",
                                            top: 24,
                                            right: 16,
                                            bgcolor: "white",
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            boxShadow: 2,
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: design.color,
                                                width: 56,
                                                height: 56,
                                            }}
                                        >
                                            {React.cloneElement(design.icon, {
                                                sx: { fontSize: 32 },
                                            })}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 800,
                                                    color: "#0f172a",
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {design.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: design.color,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {design.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.8 }}
                                    >
                                        {design.description}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                fontWeight: 700,
                                                color: "#64748b",
                                                textTransform: "uppercase",
                                                letterSpacing: 1,
                                                mb: 1,
                                                display: "block",
                                            }}
                                        >
                                            Included Pages
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            {design.pages.map((page, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={page}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: `${design.color}15`,
                                                        color: design.color,
                                                        fontWeight: 600,
                                                        fontSize: "0.75rem",
                                                        border: `1px solid ${design.color}30`,
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            flexWrap: "wrap",
                                            mb: 3,
                                        }}
                                    >
                                        {design.tech.map((tag, idx) => (
                                            <Chip
                                                key={idx}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    fontSize: "0.7rem",
                                                    height: 24,
                                                    bgcolor: "#f1f5f9",
                                                    fontWeight: 600,
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Button
                                        component={Link}
                                        href={design.route}
                                        variant="contained"
                                        fullWidth
                                        endIcon={<Speed />}
                                        sx={{
                                            backgroundImage: design.gradient,
                                            py: 1.5,
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            textTransform: "none",
                                            boxShadow: `0 4px 14px ${design.color}40`,
                                            "&:hover": {
                                                boxShadow: `0 6px 20px ${design.color}60`,
                                                transform: "translateY(-2px)",
                                            },
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        Explore Design
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Admin Panel Card */}
                <Box sx={{ mt: 8 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            borderRadius: 4,
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                opacity: 0.1,
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                        <CardContent
                            sx={{
                                p: 6,
                                textAlign: "center",
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    width: 80,
                                    height: 80,
                                    mx: "auto",
                                    mb: 3,
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Code sx={{ fontSize: 48 }} />
                            </Avatar>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 800, mb: 2 }}
                            >
                                Admin Dashboard Demo
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    maxWidth: "700px",
                                    mx: "auto",
                                    opacity: 0.95,
                                    fontWeight: 400,
                                }}
                            >
                                Explore a fully functional admin panel with
                                metrics, user management, course administration,
                                and analytics. Built with Material-UI components
                                and hardcoded demo data.
                            </Typography>
                            <Button
                                component={Link}
                                href="/admin"
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "white",
                                    color: "#6366f1",
                                    px: 6,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": {
                                        bgcolor: "#f8fafc",
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s",
                                }}
                            >
                                Open Admin Dashboard
                            </Button>
                        </CardContent>
                    </Paper>
                </Box>
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: "#0f172a", color: "white", py: 10, mt: 12 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mb: 3,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: "#6366f1",
                                        width: 56,
                                        height: 56,
                                    }}
                                >
                                    <School />
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 800 }}
                                    >
                                        Educational Website Portfolio
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        Professional Design Showcase
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, lineHeight: 1.8, mb: 3 }}
                            >
                                This portfolio demonstrates three complete
                                educational website designs, each built with
                                modern web technologies and best practices.
                                Perfect for showcasing full-stack development
                                capabilities with Laravel, Inertia.js, React,
                                and Material-UI.
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Chip
                                    label="Production Ready"
                                    size="small"
                                    sx={{
                                        bgcolor: "rgba(99,102,241,0.2)",
                                        color: "#a5b4fc",
                                        borderColor: "#6366f1",
                                    }}
                                    variant="outlined"
                                />
                                <Chip
                                    label="Fully Responsive"
                                    size="small"
                                    sx={{
                                        bgcolor: "rgba(99,102,241,0.2)",
                                        color: "#a5b4fc",
                                        borderColor: "#6366f1",
                                    }}
                                    variant="outlined"
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    textTransform: "uppercase",
                                    letterSpacing: 1.5,
                                    fontSize: "0.75rem",
                                }}
                            >
                                Designs
                            </Typography>
                            {designs.map((design, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    component={Link}
                                    href={design.route}
                                    sx={{
                                        display: "block",
                                        opacity: 0.8,
                                        mb: 2,
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            opacity: 1,
                                            pl: 1,
                                            color: "#a5b4fc",
                                        },
                                    }}
                                >
                                    {design.title}
                                </Typography>
                            ))}
                            <Typography
                                variant="body2"
                                component={Link}
                                href="/admin"
                                sx={{
                                    display: "block",
                                    opacity: 0.8,
                                    color: "inherit",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        opacity: 1,
                                        pl: 1,
                                        color: "#a5b4fc",
                                    },
                                }}
                            >
                                Admin Dashboard
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    textTransform: "uppercase",
                                    letterSpacing: 1.5,
                                    fontSize: "0.75rem",
                                }}
                            >
                                Technology Stack
                            </Typography>
                            <Grid container spacing={2}>
                                {[
                                    {
                                        name: "Laravel 12",
                                        desc: "Backend Framework",
                                    },
                                    {
                                        name: "Inertia.js 2.0",
                                        desc: "SPA Adapter",
                                    },
                                    { name: "React 19", desc: "UI Library" },
                                    {
                                        name: "Material-UI 7",
                                        desc: "Component Library",
                                    },
                                ].map((tech, index) => (
                                    <Grid size={{ xs: 12 }} key={index}>
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {tech.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{ opacity: 0.6 }}
                                            >
                                                {tech.desc}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            mt: 8,
                            pt: 6,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 2,
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            © 2026 Educational Website Portfolio. All designs
                            are for demonstration purposes.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Chip
                                label="Made with Material-UI"
                                size="small"
                                icon={<Palette sx={{ fontSize: 16 }} />}
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.05)",
                                    color: "white",
                                    borderColor: "rgba(255,255,255,0.1)",
                                }}
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
