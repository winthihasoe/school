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
    Avatar,
    Paper,
} from "@mui/material";
import {
    CheckCircle,
    Palette,
    Park,
    Restaurant,
    CameraAlt,
    Groups,
    EmojiEvents,
    WbSunny,
} from "@mui/icons-material";

export default function PreSchool() {
    const programs = [
        {
            name: "Tiny Tots",
            age: "18 months - 2 years",
            color: "#fbbf24",
            bgColor: "#fef3c7",
            description:
                "Nurturing care for our youngest learners with sensory play and early socialization.",
            activities: [
                "Sensory Play",
                "Music & Movement",
                "Story Time",
                "Art Exploration",
            ],
        },
        {
            name: "Little Explorers",
            age: "2 - 3 years",
            color: "#f97316",
            bgColor: "#fed7aa",
            description:
                "Encouraging curiosity and independence through hands-on learning experiences.",
            activities: [
                "Creative Arts",
                "Nature Walks",
                "Building Blocks",
                "Circle Time",
            ],
        },
        {
            name: "Preschool Pals",
            age: "3 - 4 years",
            color: "#22c55e",
            bgColor: "#dcfce7",
            description:
                "Building foundations in literacy, math, and social skills through play.",
            activities: [
                "Letter Recognition",
                "Number Games",
                "Dramatic Play",
                "Science Fun",
            ],
        },
        {
            name: "Pre-K Stars",
            age: "4 - 5 years",
            color: "#3b82f6",
            bgColor: "#dbeafe",
            description:
                "Preparing for kindergarten with advanced learning and school readiness.",
            activities: [
                "Reading Readiness",
                "Math Concepts",
                "Writing Skills",
                "STEM Projects",
            ],
        },
    ];

    const teachers = [
        {
            name: "Miss Emma",
            role: "Lead Teacher - Tiny Tots",
            image: "https://i.pravatar.cc/200?img=9",
            credentials: "B.Ed Early Childhood, 8 years experience",
        },
        {
            name: "Ms. Olivia",
            role: "Lead Teacher - Little Explorers",
            image: "https://i.pravatar.cc/200?img=5",
            credentials: "M.Ed Child Development, 10 years experience",
        },
        {
            name: "Teacher Sarah",
            role: "Lead Teacher - Preschool Pals",
            image: "https://i.pravatar.cc/200?img=10",
            credentials: "B.A. Education, Montessori Certified",
        },
        {
            name: "Miss Rachel",
            role: "Lead Teacher - Pre-K Stars",
            image: "https://i.pravatar.cc/200?img=16",
            credentials: "M.A. Early Childhood, 12 years experience",
        },
    ];

    const dailySchedule = [
        { time: "7:30 AM", activity: "Arrival & Free Play", icon: "🌅" },
        { time: "8:30 AM", activity: "Breakfast & Morning Circle", icon: "🥐" },
        {
            time: "9:00 AM",
            activity: "Learning Centers & Activities",
            icon: "📚",
        },
        {
            time: "10:30 AM",
            activity: "Outdoor Play & Exploration",
            icon: "⛹️",
        },
        { time: "11:30 AM", activity: "Lunch Time", icon: "🍎" },
        {
            time: "12:00 PM",
            activity: "Story Time & Quiet Activities",
            icon: "📖",
        },
        { time: "1:00 PM", activity: "Nap/Rest Time", icon: "😴" },
        { time: "2:30 PM", activity: "Snack & Creative Arts", icon: "🎨" },
        { time: "3:30 PM", activity: "Music & Movement", icon: "🎵" },
        { time: "4:00 PM", activity: "Free Play & Pick-up", icon: "🏠" },
    ];

    const features = [
        {
            icon: <Palette />,
            title: "Creative Learning",
            description: "Art, music, and hands-on activities every day",
            color: "#ec4899",
        },
        {
            icon: <Park />,
            title: "Outdoor Adventures",
            description: "Nature exploration in our safe playground",
            color: "#22c55e",
        },
        {
            icon: <Restaurant />,
            title: "Healthy Meals",
            description: "Nutritious breakfast, lunch, and snacks provided",
            color: "#f97316",
        },
        {
            icon: <CameraAlt />,
            title: "Daily Updates",
            description: "Photos and progress reports for parents",
            color: "#8b5cf6",
        },
        {
            icon: <Groups />,
            title: "Small Classes",
            description: "Low student-teacher ratios for personalized care",
            color: "#3b82f6",
        },
        {
            icon: <EmojiEvents />,
            title: "School Readiness",
            description: "Preparing children for kindergarten success",
            color: "#fbbf24",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#fef3c7" }}>
            {/* Header */}
            <AppBar
                position="static"
                sx={{
                    bgcolor: "transparent",
                    backgroundImage:
                        "linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #ec4899 100%)",
                    boxShadow: 3,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ py: 1 }}>
                        <WbSunny sx={{ mr: 2, fontSize: 40, color: "white" }} />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 900, color: "white" }}
                            >
                                Sunshine PreSchool
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                            >
                                Where Little Minds Shine Bright!
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 2,
                                alignItems: "center",
                            }}
                        >
                            <Button
                                component={Link}
                                href="/pre-school/programs"
                                color="inherit"
                                sx={{ fontWeight: 700 }}
                            >
                                Programs
                            </Button>
                            <Button
                                component={Link}
                                href="/pre-school/schedule"
                                color="inherit"
                                sx={{ fontWeight: 700 }}
                            >
                                Schedule
                            </Button>
                            <Button
                                component={Link}
                                href="/pre-school/teachers"
                                color="inherit"
                                sx={{ fontWeight: 700 }}
                            >
                                Teachers
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "white",
                                    color: "#f97316",
                                    fontWeight: 700,
                                    borderRadius: 10,
                                    "&:hover": { bgcolor: "#fef3c7" },
                                }}
                            >
                                Enroll Now
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
                    backgroundImage:
                        "linear-gradient(90deg, #fde047 0%, #fb923c 50%, #f472b6 100%)",
                    py: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    color: "white",
                                    mb: 3,
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                }}
                            >
                                A Magical Place for{" "}
                                <span style={{ color: "#fbbf24" }}>
                                    Little Learners
                                </span>
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "rgba(255,255,255,0.95)",
                                    mb: 4,
                                    lineHeight: 1.7,
                                    fontWeight: 500,
                                }}
                            >
                                Join our nurturing community where children ages
                                18 months to 5 years learn, play, and grow
                                through hands-on exploration and creative
                                discovery!
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
                                        bgcolor: "white",
                                        color: "#f97316",
                                        fontWeight: 700,
                                        borderRadius: 10,
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            bgcolor: "#fef3c7",
                                            transform: "scale(1.05)",
                                        },
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Schedule a Tour 🎉
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: "#f97316",
                                        color: "white",
                                        fontWeight: 700,
                                        borderRadius: 10,
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": { bgcolor: "#ea580c" },
                                    }}
                                >
                                    Download Brochure
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                                    alt="Happy Children Playing"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 4,
                                        boxShadow: 8,
                                        transform: "rotate(3deg)",
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "rotate(0deg)",
                                        },
                                    }}
                                />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: -24,
                                        right: -24,
                                        fontSize: "5rem",
                                    }}
                                >
                                    ✨
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: -16,
                                        left: -16,
                                        fontSize: "4rem",
                                    }}
                                >
                                    🎈
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Grid */}
            <Box sx={{ py: 10, bgcolor: "white" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Why Parents Love Us ❤️
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Everything your child needs to thrive and have fun!
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        backgroundImage:
                                            "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                                        border: "4px solid #fbbf24",
                                        borderRadius: 4,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 8,
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{ textAlign: "center", p: 4 }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                bgcolor: feature.color,
                                                mx: "auto",
                                                mb: 3,
                                            }}
                                        >
                                            {React.cloneElement(feature.icon, {
                                                sx: {
                                                    fontSize: 40,
                                                    color: "white",
                                                },
                                            })}
                                        </Avatar>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, mb: 1 }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Programs Section */}
            <Box sx={{ py: 10, bgcolor: "#fed7aa" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Our Amazing Programs 🌟
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Age-appropriate learning experiences designed for each
                        developmental stage
                    </Typography>
                    <Grid container spacing={4}>
                        {programs.map((program, index) => (
                            <Grid item size={{ xs: 12, md: 6 }} key={index}>
                                <Card
                                    sx={{
                                        overflow: "hidden",
                                        borderRadius: 4,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 8,
                                        },
                                    }}
                                >
                                    <Box sx={{ bgcolor: program.color, p: 3 }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 900,
                                                color: "white",
                                                mb: 1,
                                            }}
                                        >
                                            {program.name}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "rgba(255,255,255,0.95)",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {program.age}
                                        </Typography>
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                fontWeight: 500,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {program.description}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ fontWeight: 700, mb: 2 }}
                                        >
                                            Daily Activities Include:
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {program.activities.map(
                                                (activity, idx) => (
                                                    <Grid item xs={6} key={idx}>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                gap: 1,
                                                            }}
                                                        >
                                                            <CheckCircle
                                                                sx={{
                                                                    color: "#22c55e",
                                                                    fontSize: 20,
                                                                }}
                                                            />
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontWeight: 500,
                                                                }}
                                                            >
                                                                {activity}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                ),
                                            )}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Daily Schedule */}
            <Box sx={{ py: 10, bgcolor: "white" }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        A Day in the Life 📅
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Our structured yet flexible daily routine keeps children
                        engaged and happy
                    </Typography>
                    <Paper
                        sx={{
                            p: 4,
                            backgroundImage:
                                "linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%)",
                            borderRadius: 4,
                            boxShadow: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            {dailySchedule.map((item, index) => (
                                <Paper
                                    key={index}
                                    sx={{
                                        p: 2.5,
                                        borderRadius: 3,
                                        transition: "all 0.3s",
                                        "&:hover": { boxShadow: 4 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "2.5rem" }}>
                                            {item.icon}
                                        </Typography>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 900,
                                                    color: "#f97316",
                                                    fontSize: "1rem",
                                                }}
                                            >
                                                {item.time}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ fontWeight: 700 }}
                                            >
                                                {item.activity}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            ))}
                        </Box>
                    </Paper>
                </Container>
            </Box>

            {/* Teachers Section */}
            <Box sx={{ py: 10, bgcolor: "#fce7f3" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Meet Our Amazing Teachers 👩‍🏫
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Caring, qualified educators who love working with young
                        children
                    </Typography>
                    <Grid container spacing={4}>
                        {teachers.map((teacher, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 8,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={teacher.image}
                                        alt={teacher.name}
                                        sx={{
                                            transition: "transform 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    />
                                    <CardContent
                                        sx={{ textAlign: "center", p: 3 }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 900, mb: 1 }}
                                        >
                                            {teacher.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#f97316",
                                                fontWeight: 700,
                                                mb: 2,
                                            }}
                                        >
                                            {teacher.role}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {teacher.credentials}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    py: 10,
                    backgroundImage:
                        "linear-gradient(90deg, #f97316 0%, #ec4899 50%, #a855f7 100%)",
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center", color: "white" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 900, mb: 3 }}
                        >
                            Ready to Join Our Family? 🎊
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                opacity: 0.95,
                                fontWeight: 500,
                                lineHeight: 1.7,
                            }}
                        >
                            Schedule a tour to see our classrooms, meet our
                            teachers, and discover why Sunshine PreSchool is the
                            perfect place for your little one!
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
                                    color: "#f97316",
                                    fontWeight: 900,
                                    px: 5,
                                    py: 2,
                                    borderRadius: 10,
                                    "&:hover": {
                                        bgcolor: "#fef3c7",
                                        transform: "scale(1.05)",
                                    },
                                    transition: "all 0.3s",
                                }}
                            >
                                Schedule Your Tour Today
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "#ea580c",
                                    color: "white",
                                    fontWeight: 900,
                                    px: 5,
                                    py: 2,
                                    borderRadius: 10,
                                    "&:hover": { bgcolor: "#c2410c" },
                                }}
                            >
                                Call Us: (555) 123-4567
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: "#111827", color: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        justifyContent={"space-around"}
                        spacing={4}
                        sx={{ mb: 4 }}
                    >
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: "2.5rem" }}>
                                    🌈
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 900 }}
                                >
                                    Sunshine PreSchool
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                Nurturing young minds since 2010
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                Programs
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Tiny Tots (18mo-2yr)
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Little Explorers (2-3yr)
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Preschool Pals (3-4yr)
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                Pre-K Stars (4-5yr)
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                Quick Links
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Schedule a Tour
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Enrollment
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                Parent Portal
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                Contact Us
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                Contact
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                📍 123 Rainbow Lane
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                📞 (555) 123-4567
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.7, mb: 1 }}
                            >
                                ✉️ hello@sunshinepreschool.com
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                🕐 Mon-Fri: 7:30 AM - 6:00 PM
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            pt: 3,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            © 2026 Sunshine PreSchool. All rights reserved.
                            (Showcase Demo) 🎨
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
