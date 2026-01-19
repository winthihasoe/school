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
    Avatar,
    TextField,
    Divider,
    MenuItem,
} from "@mui/material";
import {
    MenuBook,
    CheckCircle,
    Business,
    TrendingUp,
    People,
    School,
    Assessment,
    Schedule,
} from "@mui/icons-material";

export default function Corporate() {
    const solutions = [
        {
            icon: <People />,
            title: "Employee Upskilling",
            description:
                "Comprehensive training programs to enhance your team's skills and productivity.",
            features: [
                "Custom curriculum design",
                "Skill gap analysis",
                "Progress tracking",
                "ROI measurement",
            ],
        },
        {
            icon: <Business />,
            title: "Leadership Development",
            description:
                "Transform managers into inspiring leaders with our executive training programs.",
            features: [
                "Executive coaching",
                "Leadership assessments",
                "Succession planning",
                "Change management",
            ],
        },
        {
            icon: <TrendingUp />,
            title: "Digital Transformation",
            description:
                "Prepare your organization for the digital future with cutting-edge technology training.",
            features: [
                "Cloud technology",
                "Data analytics",
                "AI & automation",
                "Cybersecurity",
            ],
        },
        {
            icon: <Assessment />,
            title: "Compliance Training",
            description:
                "Ensure regulatory compliance with industry-specific training programs.",
            features: [
                "Industry regulations",
                "Safety protocols",
                "Ethics training",
                "Certification prep",
            ],
        },
    ];

    const corporateClients = [
        {
            company: "Tech Innovations Inc.",
            industry: "Technology",
            employees: "2,500+",
            testimonial:
                "ProTraining transformed our team's capabilities. The customized curriculum addressed our exact needs.",
            name: "Sarah Chen",
            position: "Chief Learning Officer",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            company: "Global Finance Corp",
            industry: "Finance",
            employees: "5,000+",
            testimonial:
                "Outstanding training quality. We saw a 40% improvement in team productivity within 6 months.",
            name: "Michael Brown",
            position: "VP of Human Resources",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
            company: "Healthcare United",
            industry: "Healthcare",
            employees: "1,200+",
            testimonial:
                "The flexibility and expertise of ProTraining's instructors exceeded our expectations.",
            name: "Dr. Emily Rodriguez",
            position: "Director of Training",
            avatar: "https://i.pravatar.cc/150?img=9",
        },
    ];

    const stats = [
        { value: "500+", label: "Corporate Clients" },
        { value: "100,000+", label: "Employees Trained" },
        { value: "95%", label: "Client Retention" },
        { value: "$2.5M", label: "Avg. Client ROI" },
    ];

    const deliveryMethods = [
        {
            title: "On-Site Training",
            description: "Instructors come to your location",
            icon: "🏢",
        },
        {
            title: "Virtual Classroom",
            description: "Live online interactive sessions",
            icon: "💻",
        },
        {
            title: "Hybrid Model",
            description: "Combination of on-site and virtual",
            icon: "🔄",
        },
        {
            title: "Self-Paced Learning",
            description: "Access to curated content library",
            icon: "📚",
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
                            sx={{ mx: 1 }}
                        >
                            Courses
                        </Button>
                        <Button
                            component={Link}
                            href="/training-center/corporate"
                            color="inherit"
                            sx={{ mx: 1, borderBottom: "2px solid white" }}
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
                    py: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 7 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                }}
                            >
                                Enterprise Training Solutions
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
                            >
                                Empower your workforce with customized training
                                programs designed to drive business results and
                                accelerate growth.
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
                                        color: "#1e3a8a",
                                        "&:hover": { bgcolor: "#f1f5f9" },
                                        px: 4,
                                        py: 1.5,
                                    }}
                                >
                                    Request Proposal
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
                                    Schedule Consultation
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                                alt="Corporate Training"
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
                sx={{ mt: -6, position: "relative", zIndex: 10 }}
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

            {/* Training Solutions */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2 }}
                >
                    Corporate Training Solutions
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
                >
                    Comprehensive training programs tailored to your
                    organization's unique needs and objectives
                </Typography>
                <Grid container spacing={4}>
                    {solutions.map((solution, index) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: "#3b82f6",
                                            width: 64,
                                            height: 64,
                                            mb: 2,
                                        }}
                                    >
                                        {React.cloneElement(solution.icon, {
                                            sx: { fontSize: 32 },
                                        })}
                                    </Avatar>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, mb: 2 }}
                                    >
                                        {solution.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 3 }}
                                    >
                                        {solution.description}
                                    </Typography>
                                    <List dense>
                                        {solution.features.map(
                                            (feature, idx) => (
                                                <ListItem
                                                    key={idx}
                                                    sx={{ px: 0 }}
                                                >
                                                    <ListItemIcon>
                                                        <CheckCircle
                                                            sx={{
                                                                color: "#3b82f6",
                                                                fontSize: 20,
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={feature}
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

            {/* Delivery Methods */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6 }}
                    >
                        Flexible Delivery Methods
                    </Typography>
                    <Grid container spacing={4}>
                        {deliveryMethods.map((method, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: 4,
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{ mb: 2, fontSize: "3rem" }}
                                    >
                                        {method.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {method.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {method.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Client Testimonials */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2 }}
                >
                    Trusted by Industry Leaders
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    See what our corporate clients have to say
                </Typography>
                <Grid container spacing={4}>
                    {corporateClients.map((client, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {client.company}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            mb: 3,
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 1,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {client.industry}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                bgcolor: "#e5e7eb",
                                                color: "#374151",
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 1,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {client.employees} employees
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            fontStyle: "italic",
                                            color: "text.secondary",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        "{client.testimonial}"
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Avatar
                                            src={client.avatar}
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ fontWeight: 700 }}
                                            >
                                                {client.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {client.position}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Process */}
            <Box sx={{ bgcolor: "#f5f7fa", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6 }}
                    >
                        Our Implementation Process
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                step: "1",
                                title: "Needs Assessment",
                                description:
                                    "We analyze your organization's goals, challenges, and skill gaps",
                            },
                            {
                                step: "2",
                                title: "Custom Design",
                                description:
                                    "Our experts create a tailored curriculum aligned with your objectives",
                            },
                            {
                                step: "3",
                                title: "Implementation",
                                description:
                                    "We deliver engaging training through your preferred method",
                            },
                            {
                                step: "4",
                                title: "Measure & Optimize",
                                description:
                                    "Track progress, measure ROI, and continuously improve",
                            },
                        ].map((item, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: "50%",
                                            bgcolor: "#1e3a8a",
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 2,
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        {item.step}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 1 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact Form CTA */}
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 2 }}>
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Get Started Today
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Fill out the form below and our team will contact you
                        within 24 hours
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Number of Employees"
                                select
                                variant="outlined"
                                defaultValue=""
                            >
                                <MenuItem value="1-50">1-50</MenuItem>
                                <MenuItem value="51-200">51-200</MenuItem>
                                <MenuItem value="201-1000">201-1000</MenuItem>
                                <MenuItem value="1000+">1000+</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Tell us about your training needs"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    bgcolor: "#1e3a8a",
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    "&:hover": { bgcolor: "#1e40af" },
                                }}
                            >
                                Request Proposal
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
