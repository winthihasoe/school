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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    CheckCircle,
    WbSunny,
    School,
    Palette,
    SportsEsports,
    MenuBook,
    Science,
    MusicNote,
} from "@mui/icons-material";

export default function Programs() {
    const programs = [
        {
            name: "Tiny Tots",
            age: "18 months - 2 years",
            color: "#fbbf24",
            bgColor: "#fef3c7",
            icon: "👶",
            capacity: "10 children per class",
            schedule: "Full-day or Half-day options",
            tuition: "$1,200/month",
            description:
                "Our youngest learners explore the world through sensory experiences, gentle movement, and lots of love and care.",
            highlights: [
                "Sensory exploration bins",
                "Music and movement time",
                "Gentle water play",
                "Parent & Me sessions",
                "Daily cuddle time",
                "Safe exploration spaces",
            ],
            curriculum: [
                "Social-Emotional: Building trust and attachment",
                "Physical: Fine and gross motor skill development",
                "Cognitive: Cause and effect learning",
                "Language: Early vocabulary building",
            ],
        },
        {
            name: "Little Explorers",
            age: "2 - 3 years",
            color: "#f97316",
            bgColor: "#fed7aa",
            icon: "🔍",
            capacity: "12 children per class",
            schedule: "Full-day or Half-day options",
            tuition: "$1,150/month",
            description:
                "Curious toddlers discover their independence while learning to play with friends and explore new activities every day.",
            highlights: [
                "Creative art projects",
                "Nature exploration walks",
                "Building and construction play",
                "Dramatic play kitchen",
                "Circle time songs",
                "Beginning potty training support",
            ],
            curriculum: [
                "Social-Emotional: Sharing and taking turns",
                "Physical: Running, climbing, and coordination",
                "Cognitive: Sorting, matching, and patterns",
                "Language: Two-word phrases and questions",
            ],
        },
        {
            name: "Preschool Pals",
            age: "3 - 4 years",
            color: "#22c55e",
            bgColor: "#dcfce7",
            icon: "🎨",
            capacity: "15 children per class",
            schedule: "Full-day program",
            tuition: "$1,100/month",
            description:
                "Energetic preschoolers dive into hands-on learning, make new friends, and develop important school readiness skills.",
            highlights: [
                "Letter and number recognition",
                "Science experiments",
                "Dramatic play centers",
                "Art studio activities",
                "Music and movement",
                "Outdoor garden learning",
            ],
            curriculum: [
                "Social-Emotional: Following classroom rules",
                "Physical: Writing and cutting skills",
                "Cognitive: Counting to 20, ABC recognition",
                "Language: Complete sentences and storytelling",
            ],
        },
        {
            name: "Pre-K Stars",
            age: "4 - 5 years",
            color: "#3b82f6",
            bgColor: "#dbeafe",
            icon: "⭐",
            capacity: "18 children per class",
            schedule: "Full-day program",
            tuition: "$1,050/month",
            description:
                "Our oldest students prepare for kindergarten with advanced academics, STEM projects, and leadership opportunities.",
            highlights: [
                "Reading readiness program",
                "Math and science centers",
                "Writing practice daily",
                "STEM projects",
                "Leadership roles in class",
                "Kindergarten transition prep",
            ],
            curriculum: [
                "Social-Emotional: Problem-solving and conflict resolution",
                "Physical: Sports and complex motor skills",
                "Cognitive: Math concepts, reading basics",
                "Language: Writing letters and simple words",
            ],
        },
    ];

    const enrichmentPrograms = [
        {
            name: "Music & Movement",
            icon: <MusicNote />,
            color: "#ec4899",
            description: "Weekly music classes with instruments and dance",
        },
        {
            name: "Little Scientists",
            icon: <Science />,
            color: "#8b5cf6",
            description: "Hands-on STEM experiments and discovery",
        },
        {
            name: "Art Studio",
            icon: <Palette />,
            color: "#f97316",
            description: "Creative art exploration with various mediums",
        },
        {
            name: "Yoga & Mindfulness",
            icon: <SportsEsports />,
            color: "#22c55e",
            description: "Age-appropriate yoga and relaxation techniques",
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
                                sx={{
                                    fontWeight: 700,
                                    borderBottom: "3px solid white",
                                }}
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
                            Our Programs 🌟
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
                            Age-appropriate learning experiences designed to
                            nurture your child's development at every stage
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Programs Detail */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            elevation={4}
                            sx={{
                                borderRadius: 4,
                                overflow: "hidden",
                                border: `4px solid ${program.color}`,
                            }}
                        >
                            <Box sx={{ bgcolor: program.color, p: 4 }}>
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                mb: 2,
                                            }}
                                        >
                                            <Typography
                                                sx={{ fontSize: "4rem" }}
                                            >
                                                {program.icon}
                                            </Typography>
                                            <Box>
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        fontWeight: 900,
                                                        color: "white",
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
                                        </Box>
                                    </Grid>
                                    <Grid item size={{ xs: 12, md: 4 }}>
                                        <Box
                                            sx={{
                                                bgcolor: "white",
                                                borderRadius: 3,
                                                p: 3,
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 900,
                                                    color: program.color,
                                                    textAlign: "center",
                                                }}
                                            >
                                                {program.tuition}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <CardContent sx={{ p: 4 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 4,
                                        fontSize: "1.1rem",
                                        lineHeight: 1.7,
                                        fontWeight: 500,
                                    }}
                                >
                                    {program.description}
                                </Typography>

                                <Grid container spacing={4}>
                                    <Grid item size={{ xs: 12, md: 6 }}>
                                        <Box
                                            sx={{
                                                bgcolor: program.bgColor,
                                                borderRadius: 3,
                                                p: 3,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 900, mb: 2 }}
                                            >
                                                Program Details
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 1.5,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "1.5rem",
                                                        }}
                                                    >
                                                        👥
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ fontWeight: 600 }}
                                                    >
                                                        {program.capacity}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "1.5rem",
                                                        }}
                                                    >
                                                        📅
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ fontWeight: 600 }}
                                                    >
                                                        {program.schedule}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box sx={{ mt: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 900, mb: 2 }}
                                            >
                                                Daily Highlights
                                            </Typography>
                                            <Grid container spacing={1}>
                                                {program.highlights.map(
                                                    (highlight, idx) => (
                                                        <Grid
                                                            item
                                                            size={{
                                                                xs: 12,
                                                                sm: 6,
                                                            }}
                                                            key={idx}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    gap: 1,
                                                                }}
                                                            >
                                                                <CheckCircle
                                                                    sx={{
                                                                        color: program.color,
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                                <Typography
                                                                    variant="body2"
                                                                    sx={{
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    {highlight}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    ),
                                                )}
                                            </Grid>
                                        </Box>
                                    </Grid>

                                    <Grid item size={{ xs: 12, md: 6 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 900, mb: 2 }}
                                        >
                                            Learning Curriculum
                                        </Typography>
                                        <List>
                                            {program.curriculum.map(
                                                (item, idx) => (
                                                    <ListItem
                                                        key={idx}
                                                        sx={{ py: 1, px: 0 }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 40,
                                                            }}
                                                        >
                                                            <School
                                                                sx={{
                                                                    color: program.color,
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                fontWeight: 600,
                                                                fontSize:
                                                                    "0.95rem",
                                                            }}
                                                        />
                                                    </ListItem>
                                                ),
                                            )}
                                        </List>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

            {/* Enrichment Programs */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Enrichment Programs ✨
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Additional activities included in all our programs
                    </Typography>
                    <Grid container spacing={4}>
                        {enrichmentPrograms.map((program, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        border: `3px solid ${program.color}`,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 6,
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
                                                bgcolor: program.color,
                                                mx: "auto",
                                                mb: 2,
                                            }}
                                        >
                                            {React.cloneElement(program.icon, {
                                                sx: {
                                                    fontSize: 40,
                                                    color: "white",
                                                },
                                            })}
                                        </Avatar>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 900, mb: 1 }}
                                        >
                                            {program.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {program.description}
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
                            Find the Perfect Program! 🎯
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
                            Schedule a tour to see our classrooms and meet our
                            teachers. We'll help you find the best fit for your
                            child!
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
                            Schedule Your Tour Today
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
