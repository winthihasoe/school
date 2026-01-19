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
    Chip,
    Rating,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    School,
    Business,
    CheckCircle,
    TrendingUp,
    People,
    EmojiEvents,
    MenuBook,
    Schedule,
} from "@mui/icons-material";

export default function TrainingCenter() {
    const courses = [
        {
            title: "Professional Leadership Development",
            category: "Management",
            duration: "8 weeks",
            level: "Advanced",
            rating: 4.8,
            students: 1234,
            price: "$899",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
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
        },
        {
            title: "Data Analytics & Business Intelligence",
            category: "Technology",
            duration: "10 weeks",
            level: "Intermediate",
            rating: 4.9,
            students: 1567,
            price: "$999",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        },
    ];

    const instructors = [
        {
            name: "Dr. Sarah Johnson",
            title: "Leadership & Strategy",
            experience: "15+ years",
            students: "5,000+",
            avatar: "https://i.pravatar.cc/150?img=1",
        },
        {
            name: "Michael Chen",
            title: "Digital Marketing",
            experience: "12+ years",
            students: "8,000+",
            avatar: "https://i.pravatar.cc/150?img=13",
        },
        {
            name: "Emily Rodriguez",
            title: "Project Management",
            experience: "10+ years",
            students: "4,500+",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            name: "David Kim",
            title: "Data Analytics",
            experience: "8+ years",
            students: "6,200+",
            avatar: "https://i.pravatar.cc/150?img=14",
        },
    ];

    const features = [
        {
            icon: <School />,
            title: "Industry-Recognized Certifications",
            description: "Earn credentials that employers value",
        },
        {
            icon: <People />,
            title: "Expert Instructors",
            description: "Learn from industry professionals",
        },
        {
            icon: <Schedule />,
            title: "Flexible Learning",
            description: "Study at your own pace, online or in-person",
        },
        {
            icon: <Business />,
            title: "Corporate Training",
            description: "Custom solutions for organizations",
        },
    ];

    const stats = [
        { value: "50,000+", label: "Students Trained" },
        { value: "200+", label: "Courses Available" },
        { value: "95%", label: "Job Placement Rate" },
        { value: "4.8/5", label: "Average Rating" },
    ];

    return (
        <Box sx={{ bgcolor: "#f5f7fa" }}>
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
                            ← Back to Home
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
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                }}
                            >
                                Advance Your Career with Professional Training
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
                            >
                                Industry-leading courses designed to help you
                                achieve your professional goals. Learn from
                                experts and earn recognized certifications.
                            </Typography>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: "white",
                                        color: "#1e3a8a",
                                        "&:hover": { bgcolor: "#f1f5f9" },
                                        px: 4,
                                        py: 1.5,
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
                                        "&:hover": {
                                            borderColor: "#f1f5f9",
                                            bgcolor: "rgba(255,255,255,0.1)",
                                        },
                                        px: 4,
                                        py: 1.5,
                                    }}
                                >
                                    Corporate Training
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                                alt="Training"
                                sx={{
                                    width: "100%",
                                    borderRadius: 2,
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container
                maxWidth="lg"
                sx={{ mt: -6, position: "relative", zIndex: 1 }}
            >
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Grid container spacing={3}>
                        {stats.map((stat, index) => (
                            <Grid
                                item
                                size={{ xs: 6, md: 3 }}
                                key={index}
                                sx={{ textAlign: "center" }}
                            >
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
                                >
                                    {stat.label}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6 }}
                >
                    Why Choose ProTraining Center
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                                    {React.cloneElement(feature.icon, {
                                        sx: { fontSize: 40 },
                                    })}
                                </Avatar>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, mb: 1 }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Popular Courses */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Popular Courses
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6 }}
                    >
                        Start learning with our most sought-after professional
                        development programs
                    </Typography>
                    <Grid container spacing={4}>
                        {courses.map((course, index) => (
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
                                        "&:hover": {
                                            boxShadow: 6,
                                            transform: "translateY(-4px)",
                                            transition: "all 0.3s",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={course.image}
                                        alt={course.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Chip
                                            label={course.category}
                                            size="small"
                                            sx={{
                                                mb: 1,
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            {course.title}
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
                                                {course.students} students)
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            <Schedule
                                                sx={{
                                                    fontSize: 16,
                                                    verticalAlign: "middle",
                                                    mr: 0.5,
                                                }}
                                            />
                                            {course.duration} • {course.level}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="primary"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            {course.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Expert Instructors */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2 }}
                >
                    Learn from Industry Experts
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Our instructors are seasoned professionals with real-world
                    experience
                </Typography>
                <Grid container spacing={4}>
                    {instructors.map((instructor, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    "&:hover": { boxShadow: 4 },
                                }}
                            >
                                <Avatar
                                    src={instructor.avatar}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, mb: 0.5 }}
                                >
                                    {instructor.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ mb: 2 }}
                                >
                                    {instructor.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {instructor.experience} experience
                                </Typography>
                                <Typography
                                    variant="caption"
                                    display="block"
                                    color="text.secondary"
                                >
                                    {instructor.students} trained
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Corporate Training Section */}
            <Box sx={{ bgcolor: "#1e3a8a", color: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 700, mb: 3 }}
                            >
                                Corporate Training Solutions
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 4, opacity: 0.9 }}
                            >
                                Upskill your team with customized training
                                programs designed for your organization's needs.
                            </Typography>
                            <List>
                                {[
                                    "Custom curriculum development",
                                    "Flexible scheduling options",
                                    "On-site or remote delivery",
                                    "Progress tracking & reporting",
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ py: 0.5 }}>
                                        <ListItemIcon>
                                            <CheckCircle
                                                sx={{ color: "#3b82f6" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    mt: 3,
                                    bgcolor: "white",
                                    color: "#1e3a8a",
                                    "&:hover": { bgcolor: "#f1f5f9" },
                                }}
                            >
                                Request a Proposal
                            </Button>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                                alt="Corporate"
                                sx={{ width: "100%", borderRadius: 2 }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: "#0f172a", color: "white", py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                ProTraining Center
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Empowering professionals worldwide with
                                industry-leading training and certification
                                programs.
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, mb: 2 }}
                            >
                                Programs
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Leadership
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Marketing
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Technology
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Management
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, mb: 2 }}
                            >
                                Company
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                About Us
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Instructors
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 1 }}
                            >
                                Careers
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Contact
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, mb: 2 }}
                            >
                                Get Started
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.8, mb: 2 }}
                            >
                                Ready to advance your career? Explore our
                                courses and start learning today.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#3b82f6",
                                    "&:hover": { bgcolor: "#2563eb" },
                                }}
                            >
                                Browse Courses
                            </Button>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            mt: 4,
                            pt: 3,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            © 2026 ProTraining Center. All rights reserved.
                            (Showcase Demo)
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
