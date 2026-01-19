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
    TextField,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Avatar,
} from "@mui/material";
import {
    School as SchoolIcon,
    CheckCircle,
    CalendarToday,
    AttachMoney,
    Description,
    Group,
} from "@mui/icons-material";

export default function Admissions() {
    const applicationSteps = [
        "Submit Online Application",
        "Schedule Campus Visit",
        "Submit Transcripts & Records",
        "Student Interview",
        "Admission Decision",
    ];

    const importantDates = [
        { date: "October 1, 2026", event: "Application Opens" },
        { date: "November 15, 2026", event: "Early Decision Deadline" },
        { date: "January 15, 2027", event: "Regular Decision Deadline" },
        { date: "March 1, 2027", event: "Financial Aid Applications Due" },
        { date: "April 1, 2027", event: "Admission Decisions Released" },
        { date: "May 1, 2027", event: "Enrollment Commitment Deadline" },
    ];

    const tuitionFees = [
        { grade: "Elementary (K-5)", tuition: "$25,000", fees: "$2,500" },
        { grade: "Middle School (6-8)", tuition: "$28,000", fees: "$2,800" },
        { grade: "High School (9-12)", tuition: "$32,000", fees: "$3,200" },
    ];

    const financialAidOptions = [
        {
            title: "Merit Scholarships",
            description:
                "Awarded based on academic achievement, leadership, and extracurricular involvement. No separate application required.",
            amount: "Up to 50% tuition",
            icon: "🏆",
        },
        {
            title: "Need-Based Aid",
            description:
                "Financial assistance based on demonstrated family need. Complete the financial aid application by March 1st.",
            amount: "Varies by need",
            icon: "💰",
        },
        {
            title: "Sibling Discount",
            description:
                "Families with multiple children enrolled receive a discount on tuition for the second and subsequent children.",
            amount: "10% per additional child",
            icon: "👨‍👩‍👧‍👦",
        },
        {
            title: "Payment Plans",
            description:
                "Flexible monthly payment plans available with no interest charges. Spread tuition over 10 months.",
            amount: "No additional fees",
            icon: "📅",
        },
    ];

    const admissionRequirements = {
        elementary: [
            "Completed application form",
            "Birth certificate",
            "Immunization records",
            "Previous school records (if applicable)",
            "Parent interview",
        ],
        middleSchool: [
            "Completed application form",
            "Current year report cards",
            "Standardized test scores",
            "Two teacher recommendations",
            "Student essay",
            "Student interview",
        ],
        highSchool: [
            "Completed application form",
            "Official transcripts (grades 6-8)",
            "Standardized test scores (SSAT/ISEE)",
            "Two teacher recommendations",
            "Personal statement essay",
            "Student interview",
            "Extracurricular activity list",
        ],
    };

    const testimonials = [
        {
            quote: "The admissions process was seamless and welcoming. The staff made our family feel valued from day one.",
            parent: "Jennifer Martinez",
            role: "Parent of 9th grader",
            avatar: "https://i.pravatar.cc/150?img=47",
        },
        {
            quote: "Excellence Academy's generous financial aid package made it possible for our daughter to attend this amazing school.",
            parent: "David Thompson",
            role: "Parent of 7th grader",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
            quote: "The personalized attention during the admissions process showed us this was the right choice for our family.",
            parent: "Sarah Chen",
            role: "Parent of 5th & 10th graders",
            avatar: "https://i.pravatar.cc/150?img=20",
        },
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
                                sx={{ borderBottom: "2px solid white" }}
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
                    bgcolor: "#991b1b",
                    color: "white",
                    py: 10,
                    backgroundImage:
                        "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Admissions Information
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ opacity: 0.9, maxWidth: 800, mx: "auto" }}
                    >
                        Join our community of learners and leaders. Applications
                        for 2026-2027 academic year now open.
                    </Typography>
                </Container>
            </Box>

            {/* Quick Stats */}
            <Container
                maxWidth="lg"
                sx={{ mt: -6, position: "relative", zIndex: 10 }}
            >
                <Paper elevation={6} sx={{ p: 5, borderRadius: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item size={{ xs: 6, md: 3 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    25%
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Acceptance Rate
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 6, md: 3 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    $8M
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Financial Aid Budget
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 6, md: 3 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    40%
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Receive Financial Aid
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 6, md: 3 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    850
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Total Enrollment
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Application Process */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                >
                    Application Process
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
                    Follow these simple steps to apply to Excellence Academy
                </Typography>
                <Paper elevation={3} sx={{ p: 6, maxWidth: 900, mx: "auto" }}>
                    <Stepper activeStep={-1} orientation="vertical">
                        {applicationSteps.map((step, index) => (
                            <Step key={index} active>
                                <StepLabel
                                    StepIconProps={{
                                        sx: {
                                            fontSize: "2rem",
                                            color: "#1e3a8a",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {step}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box sx={{ mt: 4, textAlign: "center" }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "#991b1b",
                                px: 6,
                                py: 2,
                                fontWeight: 700,
                                "&:hover": { bgcolor: "#7f1d1d" },
                            }}
                        >
                            Start Application
                        </Button>
                    </Box>
                </Paper>
            </Container>

            {/* Important Dates */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        Important Dates
                    </Typography>
                    <Grid
                        container
                        spacing={3}
                        sx={{ maxWidth: 900, mx: "auto" }}
                    >
                        {importantDates.map((item, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: 6,
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <CalendarToday
                                        sx={{ fontSize: 40, color: "#1e3a8a" }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 700,
                                                color: "#991b1b",
                                            }}
                                        >
                                            {item.date}
                                        </Typography>
                                        <Typography variant="body1">
                                            {item.event}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Tuition & Fees */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                >
                    Tuition & Fees
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
                    2026-2027 Academic Year
                </Typography>
                <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
                    {tuitionFees.map((item, index) => (
                        <Box key={index}>
                            <Grid container spacing={3} sx={{ py: 3 }}>
                                <Grid item size={{ xs: 12, sm: 5 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {item.grade}
                                    </Typography>
                                </Grid>
                                <Grid item size={{ xs: 6, sm: 3 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 0.5 }}
                                    >
                                        Tuition
                                    </Typography>
                                    <Chip
                                        label={item.tuition}
                                        sx={{
                                            bgcolor: "#1e3a8a",
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                        }}
                                    />
                                </Grid>
                                <Grid item size={{ xs: 6, sm: 4 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 0.5 }}
                                    >
                                        Additional Fees
                                    </Typography>
                                    <Chip
                                        label={item.fees}
                                        sx={{
                                            bgcolor: "#991b1b",
                                            color: "white",
                                            fontWeight: 700,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            {index < tuitionFees.length - 1 && (
                                <Box
                                    sx={{
                                        borderBottom: "1px solid",
                                        borderColor: "grey.200",
                                    }}
                                />
                            )}
                        </Box>
                    ))}
                    <Box
                        sx={{
                            mt: 4,
                            p: 3,
                            bgcolor: "#f8fafc",
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            <strong>Note:</strong> Fees include technology,
                            activities, athletics, and facility usage. Books and
                            uniforms are additional.
                        </Typography>
                    </Box>
                </Paper>
            </Container>

            {/* Financial Aid */}
            <Box sx={{ bgcolor: "#f8fafc", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Financial Aid Options
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
                        We're committed to making Excellence Academy accessible
                        to qualified students
                    </Typography>
                    <Grid container spacing={4}>
                        {financialAidOptions.map((option, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        height: "100%",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: 8,
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography
                                            variant="h2"
                                            sx={{ mb: 2, fontSize: "3rem" }}
                                        >
                                            {option.icon}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 700, mb: 1 }}
                                        >
                                            {option.title}
                                        </Typography>
                                        <Chip
                                            label={option.amount}
                                            sx={{
                                                mb: 2,
                                                bgcolor: "#dbeafe",
                                                color: "#1e3a8a",
                                                fontWeight: 700,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {option.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Admission Requirements */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                >
                    Admission Requirements by Grade Level
                </Typography>
                <Grid container spacing={4}>
                    {[
                        {
                            title: "Elementary (K-5)",
                            list: admissionRequirements.elementary,
                            color: "#3b82f6",
                        },
                        {
                            title: "Middle School (6-8)",
                            list: admissionRequirements.middleSchool,
                            color: "#7c3aed",
                        },
                        {
                            title: "High School (9-12)",
                            list: admissionRequirements.highSchool,
                            color: "#991b1b",
                        },
                    ].map((grade, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: "100%",
                                    border: "2px solid",
                                    borderColor: grade.color,
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: grade.color,
                                        color: "white",
                                        p: 3,
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {grade.title}
                                    </Typography>
                                </Box>
                                <CardContent sx={{ p: 3 }}>
                                    <List>
                                        {grade.list.map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                sx={{ px: 0, py: 1 }}
                                            >
                                                <ListItemIcon
                                                    sx={{ minWidth: 32 }}
                                                >
                                                    <CheckCircle
                                                        sx={{
                                                            color: grade.color,
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
                                </CardContent>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Testimonials */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        Parent Testimonials
                    </Typography>
                    <Grid container spacing={4}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    elevation={2}
                                    sx={{ height: "100%", p: 3 }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            fontStyle: "italic",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        "{testimonial.quote}"
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Avatar
                                            src={testimonial.avatar}
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ fontWeight: 700 }}
                                            >
                                                {testimonial.parent}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact Form */}
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 2 }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                    >
                        Request Information
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Have questions? Fill out the form and our admissions
                        team will contact you
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Parent/Guardian Name" />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Phone Number" />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                select
                                label="Grade Level of Interest"
                                defaultValue=""
                            >
                                <MenuItem value="K-5">
                                    Elementary (K-5)
                                </MenuItem>
                                <MenuItem value="6-8">
                                    Middle School (6-8)
                                </MenuItem>
                                <MenuItem value="9-12">
                                    High School (9-12)
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Questions or Comments"
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    bgcolor: "#991b1b",
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    "&:hover": { bgcolor: "#7f1d1d" },
                                }}
                            >
                                Submit Request
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
