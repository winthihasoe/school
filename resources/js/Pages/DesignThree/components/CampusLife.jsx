import React from "react";
import { Link } from "@inertiajs/react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Avatar,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    School as SchoolIcon,
    Sports,
    MusicNote,
    Palette,
    Science,
    Public,
    EmojiEvents,
    CheckCircle,
} from "@mui/icons-material";

export default function CampusLife() {
    const athletics = [
        {
            sport: "Football",
            seasons: "Fall",
            levels: "Varsity, JV, Middle School",
            image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&h=300&fit=crop",
        },
        {
            sport: "Basketball",
            seasons: "Winter",
            levels: "Varsity, JV, Middle School",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
        },
        {
            sport: "Soccer",
            seasons: "Fall & Spring",
            levels: "Varsity, JV, Middle School",
            image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
        },
        {
            sport: "Tennis",
            seasons: "Spring",
            levels: "Varsity, JV",
            image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
        },
        {
            sport: "Swimming",
            seasons: "Winter",
            levels: "Varsity, JV, Middle School",
            image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&h=300&fit=crop",
        },
        {
            sport: "Track & Field",
            seasons: "Spring",
            levels: "Varsity, JV, Middle School",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
        },
    ];

    const arts = [
        {
            title: "Visual Arts",
            programs: [
                "Drawing & Painting",
                "Sculpture",
                "Photography",
                "Digital Design",
            ],
            icon: <Palette />,
            color: "#db2777",
        },
        {
            title: "Performing Arts",
            programs: ["Theater", "Musical Theater", "Dance", "Improv"],
            icon: "🎭",
            color: "#7c3aed",
        },
        {
            title: "Music",
            programs: ["Concert Band", "Orchestra", "Jazz Ensemble", "Choir"],
            icon: <MusicNote />,
            color: "#059669",
        },
    ];

    const clubs = [
        { name: "Student Government", category: "Leadership", icon: "🏛️" },
        { name: "Model UN", category: "Academic", icon: "🌍" },
        { name: "Debate Team", category: "Academic", icon: "💬" },
        { name: "Robotics Club", category: "STEM", icon: "🤖" },
        { name: "Environmental Club", category: "Service", icon: "🌱" },
        { name: "Yearbook", category: "Media", icon: "📸" },
        { name: "Chess Club", category: "Academic", icon: "♟️" },
        { name: "Drama Club", category: "Arts", icon: "🎭" },
        { name: "Spanish Club", category: "Culture", icon: "🌎" },
        { name: "Science Olympiad", category: "STEM", icon: "🔬" },
        { name: "Community Service", category: "Service", icon: "🤝" },
        { name: "Book Club", category: "Academic", icon: "📚" },
    ];

    const achievements = [
        {
            title: "State Champions",
            description: "Girls Soccer Team - 2025",
            icon: <EmojiEvents />,
            color: "#d97706",
        },
        {
            title: "National Recognition",
            description: "Science Olympiad Top 10 Finish",
            icon: <Science />,
            color: "#7c3aed",
        },
        {
            title: "Regional Winners",
            description: "Debate Team - Northeast Championship",
            icon: <Public />,
            color: "#059669",
        },
        {
            title: "State Competition",
            description: "Math Team - 1st Place",
            icon: "🏆",
            color: "#dc2626",
        },
    ];

    const studentLife = [
        {
            title: "Student Government",
            description:
                "Student-led governance fostering leadership and representing student voices in school decisions.",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
        },
        {
            title: "Annual Events",
            description:
                "Homecoming, Spirit Week, Prom, Senior Night, and many more traditions that build school community.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
        },
        {
            title: "Community Service",
            description:
                "Students complete 100+ service hours through partnerships with local organizations and charities.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
        },
    ];

    const facilities = [
        "25-Meter Swimming Pool",
        "Full-Size Gymnasium",
        "Athletic Stadium & Track",
        "Tennis Courts (6)",
        "Performing Arts Theater (500 seats)",
        "Art Studios & Gallery",
        "Music Practice Rooms",
        "Science & Innovation Labs",
        "Library & Learning Commons",
        "Student Center & Cafeteria",
    ];

    return (
        <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
            {/* Header */}
            <AppBar position="static" sx={{ bgcolor: "#1e3a8a", boxShadow: 3 }}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ py: 1.5 }}>
                        <SchoolIcon sx={{ mr: 2, fontSize: 36 }} />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700, fontFamily: "serif" }}
                            >
                                Excellence Academy
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.9 }}>
                                Inspiring Excellence Since 1985
                            </Typography>
                        </Box>
                        <Box
                            sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}
                        >
                            <Button
                                component={Link}
                                href="/school/academics"
                                color="inherit"
                            >
                                Academics
                            </Button>
                            <Button
                                component={Link}
                                href="/school/admissions"
                                color="inherit"
                            >
                                Admissions
                            </Button>
                            <Button
                                component={Link}
                                href="/school/campus-life"
                                color="inherit"
                                sx={{ borderBottom: "2px solid white" }}
                            >
                                Campus Life
                            </Button>
                            <Button
                                component={Link}
                                href="/school/about"
                                color="inherit"
                            >
                                About
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#991b1b",
                                    "&:hover": { bgcolor: "#7f1d1d" },
                                    ml: 2,
                                }}
                            >
                                Apply Now
                            </Button>
                            <Button
                                component={Link}
                                href="/"
                                color="inherit"
                                sx={{ fontSize: "0.8rem" }}
                            >
                                ← Home
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero */}
            <Box
                sx={{
                    position: "relative",
                    height: 500,
                    bgcolor: "#1e1b4b",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.4)",
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.5,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Container maxWidth="lg">
                        <Box sx={{ color: "white", textAlign: "center" }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontFamily: "serif",
                                }}
                            >
                                Campus Life
                            </Typography>
                            <Typography variant="h5" sx={{ opacity: 0.95 }}>
                                Beyond the classroom: Athletics, arts, clubs,
                                and community
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>

            {/* Athletics */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Sports sx={{ fontSize: 60, color: "#1e3a8a", mb: 2 }} />
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Athletics Program
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}
                    >
                        18 varsity sports with competitive teams at all levels
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {athletics.map((sport, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={sport.image}
                                    alt={sport.sport}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {sport.sport}
                                    </Typography>
                                    <Box sx={{ mb: 1 }}>
                                        <Chip
                                            label={sport.seasons}
                                            size="small"
                                            sx={{
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                                fontWeight: 600,
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {sport.levels}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Arts Programs */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        Arts Programs
                    </Typography>
                    <Grid container spacing={4}>
                        {arts.map((art, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        height: "100%",
                                        border: "2px solid",
                                        borderColor: art.color,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            bgcolor: art.color,
                                            color: "white",
                                            p: 4,
                                            textAlign: "center",
                                        }}
                                    >
                                        {typeof art.icon === "string" ? (
                                            <Typography variant="h1">
                                                {art.icon}
                                            </Typography>
                                        ) : (
                                            React.cloneElement(art.icon, {
                                                sx: { fontSize: 80 },
                                            })
                                        )}
                                    </Box>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 700, mb: 3 }}
                                        >
                                            {art.title}
                                        </Typography>
                                        <List>
                                            {art.programs.map(
                                                (program, idx) => (
                                                    <ListItem
                                                        key={idx}
                                                        sx={{ px: 0, py: 0.5 }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 32,
                                                            }}
                                                        >
                                                            <CheckCircle
                                                                sx={{
                                                                    color: art.color,
                                                                    fontSize: 20,
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={program}
                                                            primaryTypographyProps={{
                                                                fontSize:
                                                                    "0.95rem",
                                                            }}
                                                        />
                                                    </ListItem>
                                                ),
                                            )}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Clubs & Activities */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                >
                    Clubs & Activities
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, fontSize: "1.1rem" }}
                >
                    100+ clubs and student organizations
                </Typography>
                <Grid container spacing={3}>
                    {clubs.map((club, index) => (
                        <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 3,
                                    textAlign: "center",
                                    height: "100%",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <Typography variant="h2" sx={{ mb: 2 }}>
                                    {club.icon}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 700, mb: 1 }}
                                >
                                    {club.name}
                                </Typography>
                                <Chip
                                    label={club.category}
                                    size="small"
                                    sx={{
                                        bgcolor: "#dbeafe",
                                        color: "#1e3a8a",
                                        fontWeight: 600,
                                    }}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Achievements */}
            <Box sx={{ bgcolor: "#1e3a8a", color: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        Recent Achievements
                    </Typography>
                    <Grid container spacing={4}>
                        {achievements.map((achievement, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(10px)",
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    {typeof achievement.icon === "string" ? (
                                        <Typography
                                            variant="h1"
                                            sx={{ mb: 2, fontSize: "4rem" }}
                                        >
                                            {achievement.icon}
                                        </Typography>
                                    ) : (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                mb: 2,
                                            }}
                                        >
                                            {React.cloneElement(
                                                achievement.icon,
                                                {
                                                    sx: { fontSize: 60 },
                                                },
                                            )}
                                        </Box>
                                    )}
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {achievement.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ opacity: 0.9 }}
                                    >
                                        {achievement.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Student Life */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                >
                    Student Life & Community
                </Typography>
                <Grid container spacing={4}>
                    {studentLife.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    transition: "all 0.3s",
                                    "&:hover": { boxShadow: 8 },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, mb: 2 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Facilities */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        World-Class Facilities
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{ p: 6, maxWidth: 900, mx: "auto" }}
                    >
                        <Grid container spacing={3}>
                            {facilities.map((facility, index) => (
                                <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CheckCircle
                                            sx={{
                                                color: "#1e3a8a",
                                                fontSize: 24,
                                                mr: 2,
                                            }}
                                        />
                                        <Typography variant="body1">
                                            {facility}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Container>
            </Box>

            {/* CTA */}
            <Box
                sx={{
                    bgcolor: "#991b1b",
                    color: "white",
                    py: 10,
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, mb: 3, fontFamily: "serif" }}
                        >
                            Visit Our Campus
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Experience campus life firsthand. Schedule a tour
                            and see our facilities in action.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "white",
                                color: "#991b1b",
                                px: 6,
                                py: 2,
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                "&:hover": { bgcolor: "#f3f4f6" },
                            }}
                        >
                            Schedule Campus Tour
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
