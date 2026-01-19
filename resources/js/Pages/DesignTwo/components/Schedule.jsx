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
    Paper,
    Chip,
    Divider,
} from "@mui/material";
import { WbSunny, AccessTime, Restaurant, Bedtime } from "@mui/icons-material";

export default function Schedule() {
    const dailySchedule = [
        {
            time: "7:30 AM - 8:30 AM",
            activity: "Arrival & Free Play",
            icon: "🌅",
            description:
                "Children arrive and engage in self-directed play activities in various learning centers",
            color: "#fbbf24",
        },
        {
            time: "8:30 AM - 9:00 AM",
            activity: "Breakfast & Morning Circle",
            icon: "🥐",
            description:
                "Healthy breakfast followed by group circle time with songs, calendar, and weather",
            color: "#f97316",
        },
        {
            time: "9:00 AM - 10:30 AM",
            activity: "Learning Centers & Structured Activities",
            icon: "📚",
            description:
                "Age-appropriate lessons in literacy, math, science, and creative arts",
            color: "#22c55e",
        },
        {
            time: "10:30 AM - 11:30 AM",
            activity: "Outdoor Play & Exploration",
            icon: "⛹️",
            description:
                "Active play in our safe playground with climbing, running, and nature exploration",
            color: "#3b82f6",
        },
        {
            time: "11:30 AM - 12:15 PM",
            activity: "Lunch Time",
            icon: "🍎",
            description:
                "Nutritious family-style lunch with focus on healthy eating habits and manners",
            color: "#ec4899",
        },
        {
            time: "12:15 PM - 1:00 PM",
            activity: "Story Time & Quiet Activities",
            icon: "📖",
            description:
                "Calming activities including read-alouds, puzzles, and gentle games",
            color: "#8b5cf6",
        },
        {
            time: "1:00 PM - 2:30 PM",
            activity: "Rest Time",
            icon: "😴",
            description:
                "Quiet rest period on individual mats with soothing music (adjusted by age)",
            color: "#06b6d4",
        },
        {
            time: "2:30 PM - 3:00 PM",
            activity: "Afternoon Snack",
            icon: "🍪",
            description:
                "Healthy snack time with fruit, crackers, and milk or water",
            color: "#f59e0b",
        },
        {
            time: "3:00 PM - 4:00 PM",
            activity: "Creative Arts & Music",
            icon: "🎨",
            description:
                "Hands-on art projects, music and movement, or dramatic play activities",
            color: "#ef4444",
        },
        {
            time: "4:00 PM - 6:00 PM",
            activity: "Free Play & Pick-up",
            icon: "🏠",
            description:
                "Self-directed play in centers as children are picked up by families",
            color: "#14b8a6",
        },
    ];

    const weeklySpecials = [
        {
            day: "Monday",
            special: "Music & Movement",
            icon: "🎵",
            description: "Professional music teacher leads singing and dancing",
            color: "#ec4899",
        },
        {
            day: "Tuesday",
            special: "Library Day",
            icon: "📚",
            description: "Book exchange and special story time",
            color: "#8b5cf6",
        },
        {
            day: "Wednesday",
            special: "Outdoor Adventure",
            icon: "🌳",
            description: "Extended nature walk and garden activities",
            color: "#22c55e",
        },
        {
            day: "Thursday",
            special: "Science Lab",
            icon: "🔬",
            description: "Hands-on experiments and STEM projects",
            color: "#3b82f6",
        },
        {
            day: "Friday",
            special: "Show & Share",
            icon: "⭐",
            description: "Children bring items from home to share with class",
            color: "#fbbf24",
        },
    ];

    const operatingHours = [
        { day: "Monday - Friday", hours: "7:30 AM - 6:00 PM", status: "Open" },
        { day: "Saturday", hours: "Closed", status: "Closed" },
        { day: "Sunday", hours: "Closed", status: "Closed" },
    ];

    const scheduleOptions = [
        {
            name: "Full-Day Program",
            time: "7:30 AM - 6:00 PM",
            description: "Complete daily schedule with all meals included",
            price: "$1,200/month",
            color: "#22c55e",
        },
        {
            name: "Half-Day AM",
            time: "7:30 AM - 12:30 PM",
            description: "Morning program including breakfast and lunch",
            price: "$800/month",
            color: "#3b82f6",
        },
        {
            name: "Half-Day PM",
            time: "12:30 PM - 6:00 PM",
            description: "Afternoon program including lunch and snack",
            price: "$800/month",
            color: "#f97316",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#fef3c7", minHeight: "100vh" }}>
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
                                href="/pre-school"
                                color="inherit"
                                sx={{ fontWeight: 700 }}
                            >
                                Home
                            </Button>
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
                                sx={{
                                    fontWeight: 700,
                                    borderBottom: "3px solid white",
                                }}
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
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(90deg, #fde047 0%, #fb923c 50%, #f472b6 100%)",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", color: "white" }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                            }}
                        >
                            Our Daily Schedule 📅
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                opacity: 0.95,
                                fontWeight: 500,
                                maxWidth: 800,
                                mx: "auto",
                            }}
                        >
                            A structured yet flexible routine that keeps
                            children engaged, active, and happy all day long
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Operating Hours */}
            <Container maxWidth="lg" sx={{ py: 6, mt: -4 }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        backgroundImage:
                            "linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%)",
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 900, mb: 4 }}
                    >
                        Operating Hours ⏰
                    </Typography>
                    <Grid container spacing={3}>
                        {operatingHours.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        bgcolor: "white",
                                        borderRadius: 3,
                                        p: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 900, mb: 1 }}
                                    >
                                        {item.day}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color:
                                                item.status === "Open"
                                                    ? "#22c55e"
                                                    : "#ef4444",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.hours}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Schedule Options */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 900, mb: 2 }}
                >
                    Schedule Options 🕐
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, fontSize: "1.1rem" }}
                >
                    Choose the schedule that works best for your family
                </Typography>
                <Grid container spacing={4}>
                    {scheduleOptions.map((option, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    border: `4px solid ${option.color}`,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <Box sx={{ bgcolor: option.color, p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 900,
                                            color: "white",
                                            mb: 1,
                                        }}
                                    >
                                        {option.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "rgba(255,255,255,0.95)",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {option.time}
                                    </Typography>
                                </Box>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, fontWeight: 500 }}
                                    >
                                        {option.description}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        sx={{
                                            fontWeight: 900,
                                            color: option.color,
                                        }}
                                    >
                                        {option.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Daily Schedule Timeline */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Daily Routine Timeline ⏱️
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        What a typical day looks like at Sunshine PreSchool
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        {dailySchedule.map((item, index) => (
                            <Card
                                key={index}
                                elevation={3}
                                sx={{
                                    borderRadius: 3,
                                    borderLeft: `6px solid ${item.color}`,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateX(8px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item size={{ xs: 12, sm: 3 }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontSize: "2.5rem" }}
                                                >
                                                    {item.icon}
                                                </Typography>
                                                <Box>
                                                    <Chip
                                                        label={item.time}
                                                        sx={{
                                                            bgcolor: item.color,
                                                            color: "white",
                                                            fontWeight: 900,
                                                            fontSize: "0.85rem",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 9 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 900, mb: 1 }}
                                            >
                                                {item.activity}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ fontWeight: 500 }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Weekly Specials */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 900, mb: 2 }}
                >
                    Weekly Special Activities 🌟
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, fontSize: "1.1rem" }}
                >
                    Each day brings something extra special!
                </Typography>
                <Grid container spacing={3}>
                    {weeklySpecials.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    bgcolor: item.color,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        color: "white",
                                    }}
                                >
                                    <Typography sx={{ fontSize: "3rem", mb: 1 }}>
                                        {item.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 900, mb: 1 }}
                                    >
                                        {item.day}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            opacity: 0.95,
                                        }}
                                    >
                                        {item.special}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{ opacity: 0.9 }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA Section */}
            <Box
                sx={{
                    py: 8,
                    backgroundImage:
                        "linear-gradient(90deg, #f97316 0%, #ec4899 100%)",
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center", color: "white" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 900, mb: 3 }}
                        >
                            See Our Schedule in Action! 👀
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
                            Visit us during the day to observe our daily routine
                            and see how we keep children engaged and learning!
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "white",
                                color: "#f97316",
                                fontWeight: 900,
                                px: 6,
                                py: 2,
                                borderRadius: 10,
                                "&:hover": {
                                    bgcolor: "#fef3c7",
                                    transform: "scale(1.05)",
                                },
                                transition: "all 0.3s",
                            }}
                        >
                            Schedule Your Visit
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
