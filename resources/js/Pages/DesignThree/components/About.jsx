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
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    LinearProgress,
} from "@mui/material";
import {
    School as SchoolIcon,
    EmojiEvents,
    People,
    TrendingUp,
    Public,
    CheckCircle,
} from "@mui/icons-material";

export default function About() {
    const history = [
        { year: "1985", event: "Excellence Academy founded with 120 students" },
        { year: "1992", event: "Expanded to include middle school program" },
        { year: "1998", event: "New science and technology center opened" },
        { year: "2005", event: "Launched Advanced Placement program" },
        { year: "2012", event: "Performing arts theater constructed" },
        { year: "2018", event: "Achieved 98% college acceptance rate" },
        { year: "2023", event: "Renovated athletic facilities completed" },
        { year: "2026", event: "Celebrating 41 years of excellence" },
    ];

    const leadership = [
        {
            name: "Dr. Margaret Anderson",
            title: "Head of School",
            bio: "Ed.D. from Harvard, 20+ years in educational leadership",
            avatar: "https://i.pravatar.cc/150?img=47",
        },
        {
            name: "Dr. James Mitchell",
            title: "Dean of Academics",
            bio: "Ph.D. in Curriculum Development, former university professor",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
            name: "Ms. Patricia Rodriguez",
            title: "Director of Admissions",
            bio: "M.Ed. in Educational Administration, 15 years experience",
            avatar: "https://i.pravatar.cc/150?img=20",
        },
        {
            name: "Mr. David Chen",
            title: "Dean of Students",
            bio: "M.A. in School Counseling, passionate about student wellness",
            avatar: "https://i.pravatar.cc/150?img=33",
        },
    ];

    const missionValues = [
        {
            icon: <SchoolIcon />,
            title: "Academic Excellence",
            description:
                "We maintain the highest academic standards, challenging students to reach their full intellectual potential.",
        },
        {
            icon: <People />,
            title: "Character Development",
            description:
                "We cultivate integrity, empathy, and leadership qualities that prepare students to be responsible citizens.",
        },
        {
            icon: <TrendingUp />,
            title: "Innovation",
            description:
                "We embrace new ideas and technologies, preparing students for an ever-changing world.",
        },
        {
            icon: <Public />,
            title: "Global Perspective",
            description:
                "We foster cultural awareness and international understanding through diverse programs.",
        },
    ];

    const accreditations = [
        "National Association of Independent Schools (NAIS)",
        "New England Association of Schools and Colleges (NEASC)",
        "College Board Advanced Placement Program",
        "National Honor Society Chapter",
        "International Baccalaureate World School",
    ];

    const awards = [
        {
            title: "Blue Ribbon School",
            organization: "U.S. Department of Education",
            year: "2024",
        },
        {
            title: "STEM Excellence Award",
            organization: "National Science Teachers Association",
            year: "2025",
        },
        {
            title: "Top Private School",
            organization: "State Education Rankings",
            year: "2026",
        },
        {
            title: "Green School Certification",
            organization: "Environmental Education Alliance",
            year: "2025",
        },
    ];

    const stats = [
        { value: "850", label: "Total Students", progress: 85 },
        { value: "120", label: "Faculty Members", progress: 90 },
        { value: "98%", label: "College Acceptance", progress: 98 },
        { value: "41", label: "Years of Excellence", progress: 75 },
    ];

    const boardMembers = [
        {
            name: "Richard Thompson",
            position: "Board Chair",
            background: "CEO, Tech Innovations Inc.",
        },
        {
            name: "Dr. Susan Williams",
            position: "Vice Chair",
            background: "Professor, State University",
        },
        {
            name: "Michael Chang",
            position: "Treasurer",
            background: "Partner, Financial Group",
        },
        {
            name: "Jennifer Martinez",
            position: "Secretary",
            background: "Attorney, Martinez & Associates",
        },
        {
            name: "David Brown",
            position: "Member",
            background: "Community Leader & Philanthropist",
        },
        {
            name: "Emily Rodriguez",
            position: "Member",
            background: "Founder, Education Foundation",
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
                                sx={{ borderBottom: "2px solid white" }}
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
                        About Excellence Academy
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ opacity: 0.9, maxWidth: 800, mx: "auto" }}
                    >
                        A tradition of educational excellence spanning four
                        decades
                    </Typography>
                </Container>
            </Box>

            {/* Stats */}
            <Container
                maxWidth="lg"
                sx={{ mt: -6, position: "relative", zIndex: 10 }}
            >
                <Paper elevation={6} sx={{ p: 5, borderRadius: 3 }}>
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
                                                bgcolor: "#991b1b",
                                            },
                                        }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            {/* Mission & Values */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontFamily: "serif" }}
                >
                    Our Mission & Values
                </Typography>
                <Paper
                    elevation={3}
                    sx={{ p: 6, mb: 6, maxWidth: 900, mx: "auto" }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, mb: 3, color: "#1e3a8a" }}
                    >
                        Mission Statement
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                    >
                        Excellence Academy is committed to providing a rigorous,
                        comprehensive education that prepares students for
                        leadership and success in college and beyond. We foster
                        intellectual curiosity, moral character, and a passion
                        for lifelong learning in a supportive and inclusive
                        community.
                    </Typography>
                </Paper>
                <Grid container spacing={4}>
                    {missionValues.map((value, index) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                            <Card
                                elevation={2}
                                sx={{
                                    height: "100%",
                                    p: 4,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            bgcolor: "#1e3a8a",
                                            color: "white",
                                            p: 2,
                                            borderRadius: 2,
                                            mr: 2,
                                        }}
                                    >
                                        {React.cloneElement(value.icon, {
                                            sx: { fontSize: 32 },
                                        })}
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, mb: 1 }}
                                        >
                                            {value.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                        >
                                            {value.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* History Timeline */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                    >
                        Our History
                    </Typography>
                    <Box
                        sx={{
                            position: "relative",
                            maxWidth: 1000,
                            mx: "auto",
                        }}
                    >
                        {/* Timeline line */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: { xs: "20px", md: "50%" },
                                top: 0,
                                bottom: 0,
                                width: "4px",
                                bgcolor: "#1e3a8a",
                                transform: { md: "translateX(-2px)" },
                            }}
                        />
                        {history.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 4,
                                    position: "relative",
                                    flexDirection: {
                                        xs: "row",
                                        md:
                                            index % 2 === 0
                                                ? "row"
                                                : "row-reverse",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: { xs: 0, md: 1 },
                                        pr: {
                                            xs: 0,
                                            md: index % 2 === 0 ? 4 : 0,
                                        },
                                        pl: {
                                            xs: 0,
                                            md: index % 2 === 0 ? 0 : 4,
                                        },
                                        textAlign: {
                                            xs: "left",
                                            md:
                                                index % 2 === 0
                                                    ? "right"
                                                    : "left",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        bgcolor: "#991b1b",
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
                                        ml: {
                                            xs: 3,
                                            md: index % 2 === 0 ? 0 : 4,
                                        },
                                        mr: {
                                            xs: 0,
                                            md: index % 2 === 0 ? 4 : 0,
                                        },
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
                                        {item.year}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.event}
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Leadership Team */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                >
                    Leadership Team
                </Typography>
                <Grid container spacing={4}>
                    {leadership.map((member, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                elevation={2}
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
                                        border: "3px solid #1e3a8a",
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
                                    sx={{
                                        color: "#991b1b",
                                        mb: 2,
                                        fontWeight: 600,
                                    }}
                                >
                                    {member.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {member.bio}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Accreditations & Awards */}
            <Box sx={{ bgcolor: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 4,
                                    fontFamily: "serif",
                                }}
                            >
                                Accreditations
                            </Typography>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <List>
                                    {accreditations.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ px: 0, py: 1 }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 40 }}>
                                                <CheckCircle
                                                    sx={{
                                                        color: "#1e3a8a",
                                                        fontSize: 24,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{
                                                    fontSize: "1rem",
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 4,
                                    fontFamily: "serif",
                                }}
                            >
                                Recent Awards
                            </Typography>
                            <Grid container spacing={3}>
                                {awards.map((award, index) => (
                                    <Grid item size={{ xs: 12 }} key={index}>
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                p: 3,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <EmojiEvents
                                                sx={{
                                                    fontSize: 48,
                                                    color: "#d97706",
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontWeight: 700 }}
                                                >
                                                    {award.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {award.organization} •{" "}
                                                    {award.year}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Board of Trustees */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6, fontFamily: "serif" }}
                >
                    Board of Trustees
                </Typography>
                <Paper elevation={3} sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
                    <Grid container spacing={3}>
                        {boardMembers.map((member, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: "#991b1b",
                                            fontWeight: 600,
                                            mb: 0.5,
                                        }}
                                    >
                                        {member.position}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {member.background}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
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
                            Join Our Community
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Discover why Excellence Academy has been the school
                            of choice for families for over 40 years
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
                                    "&:hover": { bgcolor: "#f3f4f6" },
                                }}
                            >
                                Apply Now
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "white",
                                    borderWidth: 2,
                                    color: "white",
                                    px: 6,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        borderColor: "white",
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
