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
    Avatar,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    LinearProgress,
} from "@mui/material";
import {
    MenuBook,
    CheckCircle,
    EmojiEvents,
    School,
    People,
    TrendingUp,
    Public,
    WorkspacePremium,
} from "@mui/icons-material";

export default function About() {
    const milestones = [
        { year: "2010", event: "ProTraining Center founded" },
        { year: "2013", event: "Reached 10,000 students trained" },
        { year: "2016", event: "Expanded to corporate training" },
        { year: "2019", event: "Launched online learning platform" },
        { year: "2022", event: "50,000+ professionals certified" },
        { year: "2026", event: "Global presence in 25 countries" },
    ];

    const teamMembers = [
        {
            name: "Jennifer Martinez",
            position: "Chief Executive Officer",
            bio: "25+ years in professional education and workforce development",
            avatar: "https://i.pravatar.cc/150?img=1",
        },
        {
            name: "David Thompson",
            position: "Chief Learning Officer",
            bio: "Former Fortune 500 L&D executive with expertise in digital transformation",
            avatar: "https://i.pravatar.cc/150?img=13",
        },
        {
            name: "Dr. Sarah Kim",
            position: "Director of Curriculum",
            bio: "Ph.D. in Education with focus on adult learning methodologies",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            name: "Michael Chen",
            position: "VP of Corporate Solutions",
            bio: "Specialized in enterprise training and organizational development",
            avatar: "https://i.pravatar.cc/150?img=14",
        },
    ];

    const values = [
        {
            icon: <School />,
            title: "Excellence in Education",
            description:
                "We maintain the highest standards in curriculum design, instructor quality, and learning outcomes.",
        },
        {
            icon: <People />,
            title: "Student-Centered Approach",
            description:
                "Every decision we make prioritizes the success and growth of our learners.",
        },
        {
            icon: <TrendingUp />,
            title: "Continuous Innovation",
            description:
                "We embrace new technologies and methodologies to deliver cutting-edge training solutions.",
        },
        {
            icon: <Public />,
            title: "Global Impact",
            description:
                "We're committed to empowering professionals worldwide to achieve their career goals.",
        },
    ];

    const achievements = [
        {
            icon: <EmojiEvents />,
            title: "Industry Recognition",
            items: [
                "Best Corporate Training Provider 2025",
                "Top 10 EdTech Companies 2024",
                "Excellence in Professional Development Award",
            ],
        },
        {
            icon: <WorkspacePremium />,
            title: "Certifications & Accreditations",
            items: [
                "Accredited by International Training Standards",
                "ISO 9001:2015 Certified",
                "Approved PMI Training Partner",
            ],
        },
        {
            icon: <People />,
            title: "Community Impact",
            items: [
                "50,000+ professionals trained globally",
                "500+ corporate partnerships",
                "95% student satisfaction rate",
            ],
        },
    ];

    const stats = [
        { value: "16+", label: "Years of Excellence", progress: 100 },
        { value: "200+", label: "Expert Instructors", progress: 85 },
        { value: "50,000+", label: "Students Trained", progress: 95 },
        { value: "25", label: "Countries Worldwide", progress: 70 },
    ];

    return (
        <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
            {/* Header */}
            <AppBar
                position="static"
                sx={{ bgcolor: "#1e3a8a", boxShadow: "none" }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ py: 1 }}>
                        <MenuBook sx={{ mr: 2, fontSize: 32 }} />
                        <Typography
                            variant="h6"
                            sx={{ flexGrow: 1, fontWeight: 700 }}
                        >
                            ProTraining Center
                        </Typography>
                        <Button
                            component={Link}
                            href="/training-center"
                            color="inherit"
                            sx={{ mx: 1 }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            href="/training-center/courses"
                            color="inherit"
                            sx={{ mx: 1 }}
                        >
                            Courses
                        </Button>
                        <Button
                            component={Link}
                            href="/training-center/corporate"
                            color="inherit"
                            sx={{ mx: 1 }}
                        >
                            Corporate
                        </Button>
                        <Button
                            component={Link}
                            href="/training-center/about"
                            color="inherit"
                            sx={{ mx: 1, borderBottom: "2px solid white" }}
                        >
                            About
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                ml: 2,
                                bgcolor: "#3b82f6",
                                "&:hover": { bgcolor: "#2563eb" },
                            }}
                        >
                            Enroll Now
                        </Button>
                        <Button
                            component={Link}
                            href="/"
                            color="inherit"
                            sx={{ ml: 2, fontSize: "0.8rem" }}
                        >
                            ← Home
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    color: "white",
                    py: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                            }}
                        >
                            Transforming Careers Since 2010
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                opacity: 0.9,
                                maxWidth: 800,
                                mx: "auto",
                                lineHeight: 1.6,
                            }}
                        >
                            We're on a mission to empower professionals
                            worldwide with the skills and knowledge needed to
                            thrive in today's dynamic business environment.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container
                maxWidth="lg"
                sx={{ mt: -6, position: "relative", zIndex: 10 }}
            >
                <Paper elevation={3} sx={{ p: 5, borderRadius: 2 }}>
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 800,
                                            color: "#1e3a8a",
                                            mb: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {stat.label}
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={stat.progress}
                                        sx={{
                                            height: 8,
                                            borderRadius: 1,
                                            bgcolor: "#e5e7eb",
                                            "& .MuiLinearProgress-bar": {
                                                bgcolor: "#3b82f6",
                                            },
                                        }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Mission & Vision */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: "100%", p: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#1e3a8a",
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                            >
                                To provide accessible, high-quality professional
                                training that empowers individuals and
                                organizations to achieve their full potential.
                                We believe in continuous learning as the
                                foundation of career success and organizational
                                excellence.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: "100%", p: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#1e3a8a",
                                }}
                            >
                                Our Vision
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                            >
                                To be the world's most trusted partner in
                                professional development, recognized for
                                transforming careers and driving organizational
                                success through innovative, impactful learning
                                experiences.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Core Values */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6 }}
                    >
                        Our Core Values
                    </Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: "#3b82f6",
                                            width: 80,
                                            height: 80,
                                            mx: "auto",
                                            mb: 2,
                                        }}
                                    >
                                        {React.cloneElement(value.icon, {
                                            sx: { fontSize: 40 },
                                        })}
                                    </Avatar>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.6 }}
                                    >
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Timeline */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6 }}
                >
                    Our Journey
                </Typography>
                <Box sx={{ position: "relative" }}>
                    {/* Timeline line */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: { xs: "20px", md: "50%" },
                            top: 0,
                            bottom: 0,
                            width: "4px",
                            bgcolor: "#3b82f6",
                            transform: { md: "translateX(-2px)" },
                        }}
                    />
                    {milestones.map((milestone, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 4,
                                position: "relative",
                                flexDirection: {
                                    xs: "row",
                                    md: index % 2 === 0 ? "row" : "row-reverse",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    flex: { xs: 0, md: 1 },
                                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                                    pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                                    textAlign: {
                                        xs: "left",
                                        md: index % 2 === 0 ? "right" : "left",
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "#1e3a8a",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 1,
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        bgcolor: "white",
                                    }}
                                />
                            </Box>
                            <Paper
                                elevation={2}
                                sx={{
                                    flex: 1,
                                    p: 3,
                                    ml: { xs: 3, md: index % 2 === 0 ? 0 : 4 },
                                    mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    {milestone.year}
                                </Typography>
                                <Typography variant="body1">
                                    {milestone.event}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Container>

            {/* Leadership Team */}
            <Box sx={{ bgcolor: "#f5f7fa", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Leadership Team
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6 }}
                    >
                        Meet the experts driving our mission forward
                    </Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        height: "100%",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: 6,
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={member.avatar}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: "auto",
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 0.5 }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "#3b82f6", mb: 2 }}
                                    >
                                        {member.position}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.6 }}
                                    >
                                        {member.bio}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Achievements & Awards */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6 }}
                >
                    Achievements & Recognition
                </Typography>
                <Grid container spacing={4}>
                    {achievements.map((achievement, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    transition: "all 0.3s",
                                    "&:hover": { boxShadow: 4 },
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: "#3b82f6",
                                        width: 64,
                                        height: 64,
                                        mb: 2,
                                    }}
                                >
                                    {React.cloneElement(achievement.icon, {
                                        sx: { fontSize: 32 },
                                    })}
                                </Avatar>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mb: 2 }}
                                >
                                    {achievement.title}
                                </Typography>
                                <List>
                                    {achievement.items.map((item, idx) => (
                                        <ListItem
                                            key={idx}
                                            sx={{ px: 0, py: 0.5 }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckCircle
                                                    sx={{
                                                        color: "#3b82f6",
                                                        fontSize: 20,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{
                                                    fontSize: "0.95rem",
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA */}
            <Box
                sx={{
                    bgcolor: "#1e3a8a",
                    color: "white",
                    py: 8,
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, mb: 3 }}
                        >
                            Join Our Community
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Be part of a global network of professionals
                            committed to continuous growth and excellence
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "white",
                                    color: "#1e3a8a",
                                    px: 6,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    "&:hover": { bgcolor: "#f1f5f9" },
                                }}
                            >
                                Browse Courses
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "white",
                                    color: "white",
                                    px: 6,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    "&:hover": {
                                        borderColor: "#f1f5f9",
                                        bgcolor: "rgba(255,255,255,0.1)",
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
