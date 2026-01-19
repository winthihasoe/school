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
    Chip,
    Rating,
    TextField,
    MenuItem,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    MenuBook,
    Schedule,
    CheckCircle,
    Search,
    FilterList,
} from "@mui/icons-material";

export default function Courses() {
    const categories = [
        "All Courses",
        "Leadership",
        "Marketing",
        "Technology",
        "Project Management",
        "Data Analytics",
        "Finance",
        "Human Resources",
    ];

    const allCourses = [
        {
            title: "Professional Leadership Development",
            category: "Leadership",
            duration: "8 weeks",
            level: "Advanced",
            rating: 4.8,
            students: 1234,
            price: "$899",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            description:
                "Master leadership skills and strategic thinking for senior management roles.",
            modules: 12,
            certificate: true,
        },
        {
            title: "Digital Marketing Mastery",
            category: "Marketing",
            duration: "6 weeks",
            level: "Intermediate",
            rating: 4.9,
            students: 2156,
            price: "$749",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            description:
                "Comprehensive digital marketing strategies including SEO, social media, and analytics.",
            modules: 10,
            certificate: true,
        },
        {
            title: "Project Management Professional (PMP)",
            category: "Project Management",
            duration: "12 weeks",
            level: "Advanced",
            rating: 4.7,
            students: 987,
            price: "$1,299",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
            description:
                "Complete PMP certification preparation with real-world project scenarios.",
            modules: 15,
            certificate: true,
        },
        {
            title: "Data Analytics & Business Intelligence",
            category: "Data Analytics",
            duration: "10 weeks",
            level: "Intermediate",
            rating: 4.9,
            students: 1567,
            price: "$999",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            description:
                "Learn data analysis, visualization, and business intelligence tools.",
            modules: 14,
            certificate: true,
        },
        {
            title: "Advanced Excel for Business",
            category: "Technology",
            duration: "4 weeks",
            level: "Beginner",
            rating: 4.6,
            students: 3421,
            price: "$399",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
            description:
                "Master Excel formulas, pivot tables, macros, and data analysis.",
            modules: 8,
            certificate: true,
        },
        {
            title: "Strategic Human Resource Management",
            category: "Human Resources",
            duration: "6 weeks",
            level: "Advanced",
            rating: 4.8,
            students: 876,
            price: "$799",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
            description:
                "Advanced HR strategies, talent management, and organizational development.",
            modules: 11,
            certificate: true,
        },
        {
            title: "Financial Analysis & Planning",
            category: "Finance",
            duration: "8 weeks",
            level: "Intermediate",
            rating: 4.7,
            students: 1123,
            price: "$849",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
            description:
                "Financial modeling, forecasting, and strategic planning techniques.",
            modules: 12,
            certificate: true,
        },
        {
            title: "Agile & Scrum Certification",
            category: "Project Management",
            duration: "5 weeks",
            level: "Intermediate",
            rating: 4.9,
            students: 1987,
            price: "$649",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop",
            description:
                "Become a certified Scrum Master with hands-on agile methodology training.",
            modules: 9,
            certificate: true,
        },
    ];

    const learningPaths = [
        {
            title: "Executive Leadership Track",
            courses: 5,
            duration: "6 months",
            description:
                "Comprehensive leadership development for C-suite aspirants",
        },
        {
            title: "Digital Marketing Professional",
            courses: 4,
            duration: "4 months",
            description:
                "Complete digital marketing mastery from beginner to expert",
        },
        {
            title: "Data Science Career Path",
            courses: 6,
            duration: "8 months",
            description: "Full data science curriculum with hands-on projects",
        },
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
                            sx={{ mx: 1, borderBottom: "2px solid white" }}
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
                            sx={{ mx: 1 }}
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
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                        }}
                    >
                        Professional Development Courses
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ opacity: 0.9, maxWidth: 800, mx: "auto" }}
                    >
                        200+ industry-leading courses designed to accelerate
                        your career growth
                    </Typography>
                </Container>
            </Box>

            {/* Search & Filter */}
            <Container
                maxWidth="lg"
                sx={{ mt: -4, position: "relative", zIndex: 10 }}
            >
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                placeholder="Search courses..."
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <Search
                                            sx={{
                                                mr: 1,
                                                color: "text.secondary",
                                            }}
                                        />
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <TextField
                                fullWidth
                                select
                                label="Category"
                                defaultValue="All Courses"
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <TextField
                                fullWidth
                                select
                                label="Level"
                                defaultValue="All Levels"
                            >
                                <MenuItem value="All Levels">
                                    All Levels
                                </MenuItem>
                                <MenuItem value="Beginner">Beginner</MenuItem>
                                <MenuItem value="Intermediate">
                                    Intermediate
                                </MenuItem>
                                <MenuItem value="Advanced">Advanced</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Learning Paths */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                    Featured Learning Paths
                </Typography>
                <Grid container spacing={3}>
                    {learningPaths.map((path, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    border: "2px solid #3b82f6",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 2 }}
                                    >
                                        {path.title}
                                    </Typography>
                                    <Box
                                        sx={{ display: "flex", gap: 2, mb: 2 }}
                                    >
                                        <Chip
                                            label={`${path.courses} Courses`}
                                            size="small"
                                            sx={{
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                            }}
                                        />
                                        <Chip
                                            label={path.duration}
                                            size="small"
                                            sx={{
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {path.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            bgcolor: "#1e3a8a",
                                            "&:hover": { bgcolor: "#1e40af" },
                                        }}
                                    >
                                        View Path
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* All Courses */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                        All Courses ({allCourses.length})
                    </Typography>
                    <Grid container spacing={4}>
                        {allCourses.map((course, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: 6,
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={course.image}
                                        alt={course.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                        <Chip
                                            label={course.category}
                                            size="small"
                                            sx={{
                                                mb: 1.5,
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 1,
                                                fontSize: "1rem",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {course.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 2, fontSize: "0.85rem" }}
                                        >
                                            {course.description}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 1,
                                            }}
                                        >
                                            <Rating
                                                value={course.rating}
                                                readOnly
                                                size="small"
                                                precision={0.1}
                                            />
                                            <Typography
                                                variant="caption"
                                                sx={{ ml: 1 }}
                                            >
                                                {course.rating} (
                                                {course.students})
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 1.5,
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                <Schedule
                                                    sx={{
                                                        fontSize: 14,
                                                        verticalAlign: "middle",
                                                        mr: 0.5,
                                                    }}
                                                />
                                                {course.duration}
                                            </Typography>
                                            <Chip
                                                label={course.level}
                                                size="small"
                                                sx={{ fontSize: "0.7rem" }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                pt: 2,
                                                borderTop: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 800,
                                                    color: "#1e3a8a",
                                                }}
                                            >
                                                {course.price}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    bgcolor: "#3b82f6",
                                                    "&:hover": {
                                                        bgcolor: "#2563eb",
                                                    },
                                                    fontSize: "0.75rem",
                                                }}
                                            >
                                                Enroll
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Course Benefits */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6 }}
                >
                    What's Included in Every Course
                </Typography>
                <Grid container spacing={3}>
                    {[
                        "Industry-recognized certification",
                        "Lifetime access to course materials",
                        "Expert instructor support",
                        "Hands-on projects and assignments",
                        "Career guidance and mentorship",
                        "Access to exclusive community",
                    ].map((benefit, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 3,
                                    textAlign: "center",
                                    transition: "all 0.3s",
                                    "&:hover": { boxShadow: 4 },
                                }}
                            >
                                <CheckCircle
                                    sx={{
                                        fontSize: 48,
                                        color: "#3b82f6",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600 }}
                                >
                                    {benefit}
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
                    py: 8,
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, mb: 3 }}
                        >
                            Ready to Start Learning?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Join 50,000+ professionals who have advanced their
                            careers with ProTraining Center
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
                                "&:hover": { bgcolor: "#f1f5f9" },
                            }}
                        >
                            Browse All Courses
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
