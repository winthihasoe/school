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
    Chip,
    Paper,
} from "@mui/material";
import {
    School as SchoolIcon,
    Science,
    Sports,
    MenuBook,
    EmojiEvents,
} from "@mui/icons-material";

export default function School() {
    const gradeLevels = [
        {
            level: "Elementary",
            grades: "K-5",
            color: "#3b82f6",
            bgColor: "#dbeafe",
        },
        {
            level: "Middle School",
            grades: "6-8",
            color: "#7c3aed",
            bgColor: "#ede9fe",
        },
        {
            level: "High School",
            grades: "9-12",
            color: "#991b1b",
            bgColor: "#fecaca",
        },
    ];

    const academics = [
        {
            title: "STEM Excellence",
            description:
                "Advanced science, technology, engineering, and mathematics programs with hands-on labs.",
            icon: <Science sx={{ fontSize: 50 }} />,
            color: "#1e40af",
        },
        {
            title: "Humanities & Arts",
            description:
                "Rich programs in literature, history, music, theater, and visual arts.",
            icon: <MenuBook sx={{ fontSize: 50 }} />,
            color: "#7c3aed",
        },
        {
            title: "Athletics",
            description:
                "Competitive sports programs and physical education for all skill levels.",
            icon: <Sports sx={{ fontSize: 50 }} />,
            color: "#dc2626",
        },
        {
            title: "College Prep",
            description:
                "AP courses, SAT prep, and comprehensive college counseling services.",
            icon: <EmojiEvents sx={{ fontSize: 50 }} />,
            color: "#d97706",
        },
    ];

    const faculty = [
        {
            name: "Dr. Robert Williams",
            department: "Mathematics",
            credentials: "Ph.D. Mathematics, MIT",
            image: "https://i.pravatar.cc/200?img=12",
        },
        {
            name: "Prof. Jennifer Chen",
            department: "English Literature",
            credentials: "M.A. English, Yale University",
            image: "https://i.pravatar.cc/200?img=47",
        },
        {
            name: "Dr. Marcus Johnson",
            department: "Physics & Chemistry",
            credentials: "Ph.D. Physics, Stanford",
            image: "https://i.pravatar.cc/200?img=15",
        },
        {
            name: "Ms. Sarah Thompson",
            department: "History & Social Studies",
            credentials: "M.A. History, Harvard",
            image: "https://i.pravatar.cc/200?img=20",
        },
        {
            name: "Mr. David Martinez",
            department: "Computer Science",
            credentials: "M.S. CS, Carnegie Mellon",
            image: "https://i.pravatar.cc/200?img=33",
        },
        {
            name: "Dr. Emily Anderson",
            department: "Biology & Life Sciences",
            credentials: "Ph.D. Biology, UC Berkeley",
            image: "https://i.pravatar.cc/200?img=26",
        },
    ];

    const achievements = [
        { stat: "98%", label: "College Acceptance Rate" },
        { stat: "45+", label: "AP Courses Offered" },
        { stat: "15:1", label: "Student-Teacher Ratio" },
        { stat: "100+", label: "Club & Activities" },
    ];

    const news = [
        {
            date: "Jan 15, 2026",
            title: "Science Olympiad Team Wins State Championship",
            category: "Achievement",
        },
        {
            date: "Jan 10, 2026",
            title: 'Spring Musical "Hamilton" Auditions Announced',
            category: "Arts",
        },
        {
            date: "Jan 5, 2026",
            title: "New STEM Lab Opens with State-of-the-Art Equipment",
            category: "Facilities",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#f8fafc" }}>
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

            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    height: 600,
                    bgcolor: "#1e1b4b",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.3)",
                        zIndex: 1,
                    }}
                ></Box>
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.4,
                    }}
                ></Box>
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
                        <Box sx={{ color: "white", maxWidth: 800 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    fontSize: { xs: "3rem", md: "4rem" },
                                    fontFamily: "serif",
                                }}
                            >
                                Shaping Tomorrow's Leaders
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mb: 4, lineHeight: 1.7, opacity: 0.95 }}
                            >
                                A premier K-12 institution dedicated to academic
                                excellence, character development, and preparing
                                students for success in college and beyond.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: "#991b1b",
                                        color: "white",
                                        px: 4,
                                        py: 2,
                                        fontWeight: 700,
                                        "&:hover": { bgcolor: "#7f1d1d" },
                                    }}
                                >
                                    Schedule a Visit
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: "white",
                                        color: "white",
                                        px: 4,
                                        py: 2,
                                        fontWeight: 700,
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(8px)",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            borderColor: "white",
                                        },
                                    }}
                                >
                                    Virtual Tour
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>

            {/* Achievements Bar */}
            <Container
                maxWidth="lg"
                sx={{ mt: -8, position: "relative", zIndex: 10 }}
            >
                <Paper
                    elevation={6}
                    sx={{ py: 5, borderRadius: 3, bgcolor: "white" }}
                >
                    <Grid container spacing={4}>
                        {achievements.map((item, index) => (
                            <Grid item size={{ xs: 6, md: 3 }} key={index}>
                                <Box sx={{ textAlign: "center", py: 1 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 800,
                                            color: "#1e3a8a",
                                            mb: 1,
                                            fontSize: {
                                                xs: "2rem",
                                                md: "3rem",
                                            },
                                        }}
                                    >
                                        {item.stat}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Academic Programs */}
            <Box sx={{ py: 12, bgcolor: "white" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: "serif",
                            color: "#1f2937",
                        }}
                    >
                        Academic Excellence
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 8,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "1.1rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Our comprehensive curriculum prepares students for the
                        challenges of higher education and future careers
                    </Typography>
                    <Grid container spacing={4}>
                        {academics.map((program, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                <Card
                                    elevation={2}
                                    sx={{
                                        height: "100%",
                                        transition: "all 0.3s",
                                        borderRadius: 2,
                                        border: "1px solid",
                                        borderColor: "grey.200",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 8,
                                            borderColor: program.color,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                mb: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: program.color,
                                                    mr: 2,
                                                }}
                                            >
                                                {program.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 700,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {program.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                >
                                                    {program.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Grade Levels */}
            <Box sx={{ py: 12, bgcolor: "#f8fafc" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: "serif",
                            color: "#1f2937",
                        }}
                    >
                        Programs by Grade Level
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 8,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "1.1rem",
                        }}
                    >
                        Tailored educational experiences for every stage of
                        development
                    </Typography>
                    <Grid container spacing={4}>
                        {gradeLevels.map((level, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        bgcolor: level.bgColor,
                                        borderRadius: 3,
                                        p: 5,
                                        textAlign: "center",
                                        transition: "all 0.3s",
                                        border: "2px solid",
                                        borderColor: level.color,
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 10,
                                            borderColor: level.color,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: level.color,
                                            mb: 1,
                                        }}
                                    >
                                        {level.level}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: level.color,
                                            opacity: 0.8,
                                            mb: 3,
                                        }}
                                    >
                                        Grades {level.grades}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: level.color,
                                            color: "white",
                                            fontWeight: 700,
                                            borderRadius: 10,
                                            "&:hover": {
                                                bgcolor: level.color,
                                                opacity: 0.9,
                                            },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Faculty Section */}
            <Box sx={{ py: 12, bgcolor: "white" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: "serif",
                            color: "#1f2937",
                        }}
                    >
                        Distinguished Faculty
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 8,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "1.1rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Our educators are experts in their fields, committed to
                        inspiring and mentoring students
                    </Typography>
                    <Grid container spacing={4}>
                        {faculty.map((member, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card
                                    elevation={2}
                                    sx={{
                                        textAlign: "center",
                                        p: 4,
                                        borderRadius: 2,
                                        transition: "all 0.3s",
                                        border: "1px solid",
                                        borderColor: "grey.200",
                                        "&:hover": {
                                            boxShadow: 8,
                                            transform: "translateY(-4px)",
                                            borderColor: "#1e3a8a",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={member.image}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: "auto",
                                            mb: 2,
                                            border: "3px solid #1e3a8a",
                                            boxShadow: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 0.5 }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Chip
                                        label={member.department}
                                        size="small"
                                        sx={{
                                            mb: 2,
                                            bgcolor: "#dbeafe",
                                            color: "#1e3a8a",
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {member.credentials}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* News & Events */}
            <Box sx={{ py: 12, bgcolor: "#1e3a8a", color: "white" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Latest News & Events
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{ mb: 8, opacity: 0.9, fontSize: "1.1rem" }}
                    >
                        Stay updated with the latest happenings at Excellence
                        Academy
                    </Typography>
                    <Grid container spacing={4}>
                        {news.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: 2,
                                        p: 4,
                                        transition: "all 0.3s",
                                        cursor: "pointer",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            transform: "translateY(-4px)",
                                            boxShadow:
                                                "0 8px 24px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 2,
                                        }}
                                    >
                                        <Chip
                                            label={item.category}
                                            size="small"
                                            sx={{
                                                bgcolor: "#991b1b",
                                                color: "white",
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{ opacity: 0.75 }}
                                        >
                                            {item.date}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                            color: "white",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Admissions CTA */}
            <Box
                sx={{
                    py: 12,
                    backgroundImage:
                        "linear-gradient(90deg, #991b1b 0%, #7f1d1d 100%)",
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center", color: "white" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, mb: 3, fontFamily: "serif" }}
                        >
                            Join Our Community
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ mb: 4, lineHeight: 1.7, opacity: 0.95 }}
                        >
                            Applications for the 2026-2027 academic year are now
                            open. Discover what makes Excellence Academy the
                            right choice for your family.
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
                                    color: "#991b1b",
                                    px: 5,
                                    py: 2,
                                    fontWeight: 700,
                                    "&:hover": { bgcolor: "#f3f4f6" },
                                }}
                            >
                                Start Application
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "white",
                                    borderWidth: 2,
                                    color: "white",
                                    px: 5,
                                    py: 2,
                                    fontWeight: 700,
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        borderColor: "white",
                                    },
                                }}
                            >
                                Request Information
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: "#111827", color: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontFamily: "serif",
                                }}
                            >
                                Excellence Academy
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 2 }}
                            >
                                A tradition of excellence in education since
                                1985
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                📍 456 Academic Drive
                                <br />
                                📞 (555) 987-6543
                                <br />
                                ✉️ info@excellenceacademy.edu
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                }}
                            >
                                Academics
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Elementary
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Middle School
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                High School
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                AP Programs
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                }}
                            >
                                Admissions
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Apply Now
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Tuition & Aid
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Visit Campus
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                FAQs
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                }}
                            >
                                Campus Life
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Athletics
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Arts & Music
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Clubs
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Calendar
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                }}
                            >
                                Connect
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Alumni
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Parent Portal
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                News
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Contact
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            mt: 6,
                            pt: 4,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            © 2026 Excellence Academy. All rights reserved.
                            (Showcase Demo)
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
