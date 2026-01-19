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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    WbSunny,
    CheckCircle,
    Favorite,
    EmojiEvents,
    School,
    Star,
} from "@mui/icons-material";

export default function Teachers() {
    const teachers = [
        {
            name: "Miss Emma Thompson",
            role: "Lead Teacher - Tiny Tots",
            image: "https://i.pravatar.cc/400?img=9",
            age: "18 months - 2 years",
            experience: "8 years",
            education: "B.Ed Early Childhood Education",
            specialties: [
                "Infant & Toddler Development",
                "Sensory Play",
                "Parent Communication",
            ],
            quote: "Every child is a unique flower in our garden, and I love watching them bloom!",
            color: "#fbbf24",
            certifications: [
                "CPR & First Aid Certified",
                "Reggio Emilia Trained",
                "Positive Discipline",
            ],
        },
        {
            name: "Ms. Olivia Chen",
            role: "Lead Teacher - Little Explorers",
            image: "https://i.pravatar.cc/400?img=5",
            age: "2 - 3 years",
            experience: "10 years",
            education: "M.Ed Child Development",
            specialties: [
                "Language Development",
                "Creative Arts",
                "Social-Emotional Learning",
            ],
            quote: "Curiosity is the engine of learning, and I'm here to fuel it every day!",
            color: "#f97316",
            certifications: [
                "CPR & First Aid Certified",
                "Teaching Strategies GOLD",
                "Conscious Discipline",
            ],
        },
        {
            name: "Teacher Sarah Martinez",
            role: "Lead Teacher - Preschool Pals",
            image: "https://i.pravatar.cc/400?img=10",
            age: "3 - 4 years",
            experience: "12 years",
            education: "B.A. Education, Montessori Certified",
            specialties: [
                "Literacy Development",
                "Math Concepts",
                "Montessori Methods",
            ],
            quote: "Learning through play is the foundation of everything we do in our classroom!",
            color: "#22c55e",
            certifications: [
                "CPR & First Aid Certified",
                "Montessori Primary Certification",
                "Creative Curriculum",
            ],
        },
        {
            name: "Miss Rachel Williams",
            role: "Lead Teacher - Pre-K Stars",
            image: "https://i.pravatar.cc/400?img=16",
            age: "4 - 5 years",
            experience: "15 years",
            education: "M.A. Early Childhood, Reading Specialist",
            specialties: [
                "Kindergarten Readiness",
                "STEM Education",
                "Reading Instruction",
            ],
            quote: "Preparing children for kindergarten while keeping the magic of childhood alive!",
            color: "#3b82f6",
            certifications: [
                "CPR & First Aid Certified",
                "Reading Recovery Training",
                "STEM Educator Certification",
            ],
        },
    ];

    const assistantTeachers = [
        {
            name: "Ms. Jessica Lee",
            role: "Assistant Teacher",
            image: "https://i.pravatar.cc/200?img=27",
            experience: "5 years",
        },
        {
            name: "Ms. Amanda Garcia",
            role: "Assistant Teacher",
            image: "https://i.pravatar.cc/200?img=23",
            experience: "4 years",
        },
        {
            name: "Ms. Nicole Brown",
            role: "Assistant Teacher",
            image: "https://i.pravatar.cc/200?img=29",
            experience: "6 years",
        },
        {
            name: "Ms. Sophia Davis",
            role: "Assistant Teacher",
            image: "https://i.pravatar.cc/200?img=31",
            experience: "3 years",
        },
    ];

    const specialtyStaff = [
        {
            name: "Mr. James Wilson",
            role: "Music Teacher",
            icon: "🎵",
            description: "M.Mus Music Education, 7 years experience",
            color: "#ec4899",
        },
        {
            name: "Ms. Maria Rodriguez",
            role: "Spanish Teacher",
            icon: "🌎",
            description: "Native speaker, B.A. Language Education",
            color: "#8b5cf6",
        },
        {
            name: "Coach Michael",
            role: "Physical Education",
            icon: "⚽",
            description: "B.S. Physical Education, Youth Sports Certified",
            color: "#22c55e",
        },
        {
            name: "Ms. Lisa Anderson",
            role: "Art Specialist",
            icon: "🎨",
            description: "B.F.A. Art Education, 9 years experience",
            color: "#f97316",
        },
    ];

    const teacherQualifications = [
        "State-licensed early childhood educators",
        "Ongoing professional development (20+ hours annually)",
        "Background checks and fingerprinting",
        "CPR and First Aid certified",
        "Child development specialists",
        "Low student-teacher ratios maintained",
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
                                sx={{ fontWeight: 700 }}
                            >
                                Schedule
                            </Button>
                            <Button
                                component={Link}
                                href="/pre-school/teachers"
                                color="inherit"
                                sx={{
                                    fontWeight: 700,
                                    borderBottom: "3px solid white",
                                }}
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
                            Our Amazing Teachers 👩‍🏫
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
                            Meet the caring, qualified educators who make every
                            day special for your child
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Lead Teachers */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {teachers.map((teacher, index) => (
                        <Card
                            key={index}
                            elevation={6}
                            sx={{
                                borderRadius: 4,
                                overflow: "hidden",
                                border: `4px solid ${teacher.color}`,
                            }}
                        >
                            <Grid container>
                                <Grid item size={{ xs: 12, md: 4 }}>
                                    <CardMedia
                                        component="img"
                                        image={teacher.image}
                                        alt={teacher.name}
                                        sx={{
                                            height: "100%",
                                            minHeight: 400,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, md: 8 }}>
                                    <Box sx={{ bgcolor: teacher.color, p: 3 }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 900,
                                                color: "white",
                                                mb: 1,
                                            }}
                                        >
                                            {teacher.name}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "rgba(255,255,255,0.95)",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {teacher.role}
                                        </Typography>
                                        <Chip
                                            label={teacher.age}
                                            sx={{
                                                mt: 1,
                                                bgcolor: "white",
                                                color: teacher.color,
                                                fontWeight: 700,
                                            }}
                                        />
                                    </Box>

                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                bgcolor: "#f8fafc",
                                                borderRadius: 2,
                                                p: 3,
                                                mb: 3,
                                                borderLeft: `4px solid ${teacher.color}`,
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontStyle: "italic",
                                                    fontWeight: 500,
                                                    fontSize: "1.1rem",
                                                }}
                                            >
                                                "{teacher.quote}"
                                            </Typography>
                                        </Box>

                                        <Grid container spacing={3}>
                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 900,
                                                        mb: 1,
                                                        color: teacher.color,
                                                    }}
                                                >
                                                    Education & Experience
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ mb: 0.5 }}
                                                >
                                                    📚 {teacher.education}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ mb: 2 }}
                                                >
                                                    ⭐ {teacher.experience} of
                                                    teaching experience
                                                </Typography>

                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 900,
                                                        mb: 1,
                                                        color: teacher.color,
                                                    }}
                                                >
                                                    Specialties
                                                </Typography>
                                                {teacher.specialties.map(
                                                    (specialty, idx) => (
                                                        <Chip
                                                            key={idx}
                                                            label={specialty}
                                                            size="small"
                                                            sx={{
                                                                mr: 1,
                                                                mb: 1,
                                                                bgcolor:
                                                                    teacher.color,
                                                                color: "white",
                                                                fontWeight: 600,
                                                            }}
                                                        />
                                                    ),
                                                )}
                                            </Grid>

                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 900,
                                                        mb: 1,
                                                        color: teacher.color,
                                                    }}
                                                >
                                                    Certifications
                                                </Typography>
                                                <List dense>
                                                    {teacher.certifications.map(
                                                        (cert, idx) => (
                                                            <ListItem
                                                                key={idx}
                                                                sx={{ py: 0.5 }}
                                                            >
                                                                <ListItemIcon
                                                                    sx={{
                                                                        minWidth: 32,
                                                                    }}
                                                                >
                                                                    <CheckCircle
                                                                        sx={{
                                                                            color: teacher.color,
                                                                            fontSize: 20,
                                                                        }}
                                                                    />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        cert
                                                                    }
                                                                    primaryTypographyProps={{
                                                                        fontSize:
                                                                            "0.9rem",
                                                                        fontWeight: 600,
                                                                    }}
                                                                />
                                                            </ListItem>
                                                        ),
                                                    )}
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}
                </Box>
            </Container>

            {/* Assistant Teachers */}
            <Box sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Assistant Teachers 🤝
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Supporting our lead teachers to provide personalized
                        attention to every child
                    </Typography>
                    <Grid container spacing={4}>
                        {assistantTeachers.map((teacher, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        borderRadius: 4,
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
                                    />
                                    <CardContent sx={{ textAlign: "center" }}>
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
                                                mb: 1,
                                            }}
                                        >
                                            {teacher.role}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {teacher.experience} experience
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Specialty Staff */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 900, mb: 2 }}
                >
                    Specialty Instructors ✨
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, fontSize: "1.1rem" }}
                >
                    Expert teachers bringing enrichment programs to our students
                </Typography>
                <Grid container spacing={4}>
                    {specialtyStaff.map((staff, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    border: `3px solid ${staff.color}`,
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: "center", p: 4 }}>
                                    <Typography
                                        sx={{ fontSize: "4rem", mb: 2 }}
                                    >
                                        {staff.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 900, mb: 1 }}
                                    >
                                        {staff.name}
                                    </Typography>
                                    <Chip
                                        label={staff.role}
                                        sx={{
                                            mb: 2,
                                            bgcolor: staff.color,
                                            color: "white",
                                            fontWeight: 700,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {staff.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Teacher Qualifications */}
            <Box
                sx={{
                    bgcolor: "white",
                    py: 8,
                    backgroundImage:
                        "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 900, mb: 2 }}
                    >
                        Our Commitment to Quality 🏆
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                        Every teacher at Sunshine PreSchool meets the highest
                        standards
                    </Typography>
                    <Card
                        elevation={6}
                        sx={{ borderRadius: 4, p: 4, bgcolor: "white" }}
                    >
                        <List>
                            {teacherQualifications.map((qual, index) => (
                                <ListItem key={index} sx={{ py: 1.5 }}>
                                    <ListItemIcon>
                                        <Star sx={{ color: "#fbbf24" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={qual}
                                        primaryTypographyProps={{
                                            fontWeight: 600,
                                            fontSize: "1.05rem",
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
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
                            Meet Our Teachers in Person! 💛
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
                            Schedule a tour to meet our amazing staff and see
                            them in action with the children!
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
