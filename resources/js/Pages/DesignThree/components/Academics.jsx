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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import {
    School as SchoolIcon,
    ExpandMore,
    CheckCircle,
    Science,
    MenuBook,
    Computer,
    Language,
    Calculate,
    Palette,
    FitnessCenter,
} from "@mui/icons-material";

export default function Academics() {
    const departments = [
        {
            name: "Mathematics",
            icon: <Calculate />,
            color: "#1e40af",
            courses: [
                "Algebra I & II",
                "Geometry",
                "Pre-Calculus",
                "AP Calculus AB/BC",
                "AP Statistics",
                "Multivariable Calculus",
            ],
            highlights: [
                "Award-winning Math Team",
                "Integration with real-world applications",
                "Advanced problem-solving workshops",
            ],
        },
        {
            name: "Science",
            icon: <Science />,
            color: "#7c3aed",
            courses: [
                "Biology",
                "Chemistry",
                "Physics",
                "AP Biology",
                "AP Chemistry",
                "AP Physics C",
                "Environmental Science",
            ],
            highlights: [
                "State-of-the-art laboratories",
                "Research opportunities with universities",
                "Annual Science Fair participation",
            ],
        },
        {
            name: "English & Literature",
            icon: <MenuBook />,
            color: "#dc2626",
            courses: [
                "English 9-12",
                "AP English Language",
                "AP English Literature",
                "Creative Writing",
                "Journalism",
                "Public Speaking",
            ],
            highlights: [
                "Award-winning literary magazine",
                "Debate team championships",
                "Annual Shakespeare Festival",
            ],
        },
        {
            name: "Computer Science",
            icon: <Computer />,
            color: "#059669",
            courses: [
                "Introduction to Programming",
                "AP Computer Science A",
                "AP Computer Science Principles",
                "Web Development",
                "Data Structures",
                "Artificial Intelligence",
            ],
            highlights: [
                "Robotics team competitions",
                "Hackathon participation",
                "Industry partnerships for internships",
            ],
        },
        {
            name: "World Languages",
            icon: <Language />,
            color: "#d97706",
            courses: [
                "Spanish I-IV",
                "French I-IV",
                "Mandarin Chinese I-IV",
                "Latin I-III",
                "AP Spanish Language",
                "AP French Language",
            ],
            highlights: [
                "Study abroad programs",
                "Cultural exchange opportunities",
                "Language immersion weeks",
            ],
        },
        {
            name: "Arts",
            icon: <Palette />,
            color: "#db2777",
            courses: [
                "Studio Art",
                "AP Art & Design",
                "Music Theory",
                "Band & Orchestra",
                "Theater Arts",
                "Digital Media",
            ],
            highlights: [
                "Annual art exhibitions",
                "Theater productions each semester",
                "Music festival performances",
            ],
        },
    ];

    const apCourses = [
        { subject: "Mathematics", count: 4 },
        { subject: "Science", count: 6 },
        { subject: "English", count: 2 },
        { subject: "History", count: 4 },
        { subject: "Computer Science", count: 2 },
        { subject: "Languages", count: 5 },
        { subject: "Arts", count: 3 },
    ];

    const graduationRequirements = [
        {
            category: "English",
            credits: 4,
            description: "All four years required",
        },
        {
            category: "Mathematics",
            credits: 4,
            description: "Through Pre-Calculus minimum",
        },
        {
            category: "Science",
            credits: 3,
            description: "Including lab sciences",
        },
        {
            category: "Social Studies",
            credits: 3,
            description: "World & US History required",
        },
        {
            category: "World Language",
            credits: 3,
            description: "Same language for 3 years",
        },
        {
            category: "Arts",
            credits: 2,
            description: "Visual or performing arts",
        },
        {
            category: "Physical Education",
            credits: 2,
            description: "Health & Wellness included",
        },
        { category: "Electives", credits: 4, description: "Student choice" },
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
                                sx={{ borderBottom: "2px solid white" }}
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

            {/* Hero */}
            <Box
                sx={{
                    bgcolor: "#1e3a8a",
                    color: "white",
                    py: 10,
                    backgroundImage:
                        "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Academic Programs
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ opacity: 0.9, maxWidth: 800, mx: "auto" }}
                    >
                        Rigorous curriculum designed to challenge and inspire
                        students to reach their full potential
                    </Typography>
                </Container>
            </Box>

            {/* AP Courses Overview */}
            <Container
                maxWidth="lg"
                sx={{ mt: -6, position: "relative", zIndex: 10 }}
            >
                <Paper elevation={6} sx={{ p: 5, borderRadius: 3 }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 700, mb: 4, fontFamily: "serif" }}
                    >
                        45+ Advanced Placement Courses
                    </Typography>
                    <Grid container spacing={3}>
                        {apCourses.map((course, index) => (
                            <Grid
                                item
                                size={{ xs: 6, sm: 4, md: 3 }}
                                key={index}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 800,
                                            color: "#1e3a8a",
                                            mb: 1,
                                        }}
                                    >
                                        {course.count}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {course.subject}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Academic Departments */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                >
                    Departments & Course Offerings
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6,
                        maxWidth: 700,
                        mx: "auto",
                        fontSize: "1.1rem",
                    }}
                >
                    Explore our comprehensive academic departments and their
                    course offerings
                </Typography>
                <Grid container spacing={4}>
                    {departments.map((dept, index) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: "100%",
                                    border: "2px solid",
                                    borderColor: dept.color,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                bgcolor: dept.color,
                                                color: "white",
                                                p: 2,
                                                borderRadius: 2,
                                                mr: 2,
                                            }}
                                        >
                                            {React.cloneElement(dept.icon, {
                                                sx: { fontSize: 40 },
                                            })}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            {dept.name}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            color: dept.color,
                                        }}
                                    >
                                        Course Offerings:
                                    </Typography>
                                    <Grid container spacing={1} sx={{ mb: 3 }}>
                                        {dept.courses.map((course, idx) => (
                                            <Grid
                                                item
                                                size={{ xs: 12, sm: 6 }}
                                                key={idx}
                                            >
                                                <Chip
                                                    label={course}
                                                    size="small"
                                                    sx={{
                                                        width: "100%",
                                                        justifyContent:
                                                            "flex-start",
                                                        bgcolor: `${dept.color}15`,
                                                        color: dept.color,
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>

                                    <Typography
                                        variant="subtitle2"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        Highlights:
                                    </Typography>
                                    <List dense>
                                        {dept.highlights.map(
                                            (highlight, idx) => (
                                                <ListItem
                                                    key={idx}
                                                    sx={{ px: 0 }}
                                                >
                                                    <ListItemIcon
                                                        sx={{ minWidth: 32 }}
                                                    >
                                                        <CheckCircle
                                                            sx={{
                                                                color: dept.color,
                                                                fontSize: 20,
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={highlight}
                                                        primaryTypographyProps={{
                                                            fontSize: "0.95rem",
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

            {/* Graduation Requirements */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Graduation Requirements
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 6,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "1.1rem",
                        }}
                    >
                        Students must complete 25 credits to graduate
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{ p: 4, maxWidth: 900, mx: "auto" }}
                    >
                        {graduationRequirements.map((req, index) => (
                            <Box key={index}>
                                <Grid container spacing={3} sx={{ py: 2 }}>
                                    <Grid item size={{ xs: 12, sm: 4 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            {req.category}
                                        </Typography>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 2 }}>
                                        <Chip
                                            label={`${req.credits} Credits`}
                                            sx={{
                                                bgcolor: "#1e3a8a",
                                                color: "white",
                                                fontWeight: 700,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {req.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {index < graduationRequirements.length - 1 && (
                                    <Box
                                        sx={{
                                            borderBottom: "1px solid",
                                            borderColor: "grey.200",
                                        }}
                                    />
                                )}
                            </Box>
                        ))}
                    </Paper>
                </Container>
            </Box>

            {/* Academic Support */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                >
                    Academic Support Services
                </Typography>
                <Grid container spacing={4}>
                    {[
                        {
                            title: "College Counseling",
                            description:
                                "Dedicated counselors guide students through the college application process, from school selection to essay writing.",
                            icon: "🎓",
                        },
                        {
                            title: "Tutoring Center",
                            description:
                                "Free peer and professional tutoring available in all subjects during and after school hours.",
                            icon: "📚",
                        },
                        {
                            title: "Academic Advising",
                            description:
                                "Regular meetings with advisors to plan course selections and ensure graduation requirements are met.",
                            icon: "🗓️",
                        },
                        {
                            title: "Learning Resources",
                            description:
                                "State-of-the-art library, computer labs, and online resources available to all students.",
                            icon: "💻",
                        },
                    ].map((service, index) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    textAlign: "center",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <Typography variant="h2" sx={{ mb: 2 }}>
                                    {service.icon}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mb: 2 }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {service.description}
                                </Typography>
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
                    py: 10,
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, mb: 3, fontFamily: "serif" }}
                        >
                            Experience Academic Excellence
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Schedule a campus visit to learn more about our
                            academic programs
                        </Typography>
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
                                "&:hover": { bgcolor: "#f3f4f6" },
                            }}
                        >
                            Schedule Campus Visit
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
