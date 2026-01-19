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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Chip,
    LinearProgress,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import {
    Dashboard,
    People,
    School,
    TrendingUp,
    AttachMoney,
    Assessment,
    Settings,
    ExitToApp,
} from "@mui/icons-material";

export default function AdminDashboard() {
    const [selectedMenu, setSelectedMenu] = React.useState("dashboard");

    const stats = [
        {
            title: "Total Students",
            value: "2,847",
            change: "+12.5%",
            trend: "up",
            icon: <People sx={{ fontSize: 40 }} />,
            color: "#3b82f6",
        },
        {
            title: "Active Courses",
            value: "156",
            change: "+8 new",
            trend: "up",
            icon: <School sx={{ fontSize: 40 }} />,
            color: "#8b5cf6",
        },
        {
            title: "Revenue (Monthly)",
            value: "$284,500",
            change: "+18.2%",
            trend: "up",
            icon: <AttachMoney sx={{ fontSize: 40 }} />,
            color: "#10b981",
        },
        {
            title: "Completion Rate",
            value: "87.3%",
            change: "+3.1%",
            trend: "up",
            icon: <TrendingUp sx={{ fontSize: 40 }} />,
            color: "#f59e0b",
        },
    ];

    const recentUsers = [
        {
            id: 1,
            name: "Alice Johnson",
            email: "alice.johnson@email.com",
            role: "Student",
            status: "Active",
            joinDate: "2026-01-15",
            avatar: "https://i.pravatar.cc/150?img=1",
        },
        {
            id: 2,
            name: "Bob Smith",
            email: "bob.smith@email.com",
            role: "Instructor",
            status: "Active",
            joinDate: "2026-01-14",
            avatar: "https://i.pravatar.cc/150?img=13",
        },
        {
            id: 3,
            name: "Carol Williams",
            email: "carol.w@email.com",
            role: "Student",
            status: "Pending",
            joinDate: "2026-01-13",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            id: 4,
            name: "David Brown",
            email: "david.brown@email.com",
            role: "Student",
            status: "Active",
            joinDate: "2026-01-12",
            avatar: "https://i.pravatar.cc/150?img=14",
        },
        {
            id: 5,
            name: "Emma Davis",
            email: "emma.davis@email.com",
            role: "Instructor",
            status: "Active",
            joinDate: "2026-01-11",
            avatar: "https://i.pravatar.cc/150?img=9",
        },
    ];

    const popularCourses = [
        {
            id: 1,
            name: "Professional Leadership Development",
            category: "Management",
            students: 1234,
            revenue: "$1,110,600",
            completion: 92,
        },
        {
            id: 2,
            name: "Digital Marketing Mastery",
            category: "Marketing",
            students: 2156,
            revenue: "$1,614,844",
            completion: 88,
        },
        {
            id: 3,
            name: "Data Analytics & BI",
            category: "Technology",
            students: 1567,
            revenue: "$1,565,433",
            completion: 85,
        },
        {
            id: 4,
            name: "Project Management (PMP)",
            category: "Management",
            students: 987,
            revenue: "$1,282,113",
            completion: 90,
        },
        {
            id: 5,
            name: "Web Development Bootcamp",
            category: "Technology",
            students: 1845,
            revenue: "$1,383,750",
            completion: 78,
        },
    ];

    const menuItems = [
        { text: "Dashboard", icon: <Dashboard />, id: "dashboard" },
        { text: "Users", icon: <People />, id: "users" },
        { text: "Courses", icon: <School />, id: "courses" },
        { text: "Analytics", icon: <Assessment />, id: "analytics" },
        { text: "Settings", icon: <Settings />, id: "settings" },
    ];

    const drawerWidth = 240;

    return (
        <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        bgcolor: "#1e293b",
                        color: "white",
                    },
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        Admin Panel
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.7 }}>
                        Showcase Demo
                    </Typography>
                </Box>
                <List sx={{ px: 2, py: 2 }}>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.id}
                            onClick={() => setSelectedMenu(item.id)}
                            sx={{
                                mb: 1,
                                borderRadius: 2,
                                bgcolor:
                                    selectedMenu === item.id
                                        ? "rgba(59, 130, 246, 0.2)"
                                        : "transparent",
                                "&:hover": {
                                    bgcolor:
                                        selectedMenu === item.id
                                            ? "rgba(59, 130, 246, 0.3)"
                                            : "rgba(255,255,255,0.05)",
                                },
                            }}
                        >
                            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ mt: "auto", p: 2 }}>
                    <Divider
                        sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }}
                    />
                    <Button
                        component={Link}
                        href="/"
                        fullWidth
                        startIcon={<ExitToApp />}
                        sx={{
                            color: "white",
                            justifyContent: "flex-start",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "#f8fafc", minHeight: "100vh" }}
            >
                {/* Top Bar */}
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{ bgcolor: "white", borderBottom: "1px solid #e2e8f0" }}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                                color: "#1e293b",
                                fontWeight: 600,
                            }}
                        >
                            Dashboard Overview
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                Admin User
                            </Typography>
                            <Avatar
                                sx={{
                                    bgcolor: "#3b82f6",
                                    width: 40,
                                    height: 40,
                                }}
                            >
                                A
                            </Avatar>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Content Area */}
                <Container maxWidth="xl" sx={{ py: 4 }}>
                    {/* Stats Grid */}
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {stats.map((stat, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card>
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ mb: 1 }}
                                                >
                                                    {stat.title}
                                                </Typography>
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        fontWeight: 700,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {stat.value}
                                                </Typography>
                                                <Chip
                                                    label={stat.change}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "#dcfce7",
                                                        color: "#166534",
                                                        height: 20,
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            </Box>
                                            <Avatar
                                                sx={{
                                                    bgcolor: stat.color,
                                                    width: 60,
                                                    height: 60,
                                                }}
                                            >
                                                {stat.icon}
                                            </Avatar>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={2}>
                        {/* Recent Users Table */}
                        <Grid item size={{ xs: 12, lg: 8 }}>
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 3 }}
                                    >
                                        Recent Users
                                    </Typography>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        sx={{ fontWeight: 700 }}
                                                    >
                                                        User
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ fontWeight: 700 }}
                                                    >
                                                        Role
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ fontWeight: 700 }}
                                                    >
                                                        Status
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ fontWeight: 700 }}
                                                    >
                                                        Join Date
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {recentUsers.map((user) => (
                                                    <TableRow
                                                        key={user.id}
                                                        hover
                                                    >
                                                        <TableCell>
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    gap: 2,
                                                                }}
                                                            >
                                                                <Avatar
                                                                    src={
                                                                        user.avatar
                                                                    }
                                                                    sx={{
                                                                        width: 40,
                                                                        height: 40,
                                                                    }}
                                                                />
                                                                <Box>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        {
                                                                            user.name
                                                                        }
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="caption"
                                                                        color="text.secondary"
                                                                    >
                                                                        {
                                                                            user.email
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Chip
                                                                label={
                                                                    user.role
                                                                }
                                                                size="small"
                                                                sx={{
                                                                    bgcolor:
                                                                        user.role ===
                                                                        "Instructor"
                                                                            ? "#dbeafe"
                                                                            : "#f3e8ff",
                                                                    color:
                                                                        user.role ===
                                                                        "Instructor"
                                                                            ? "#1e40af"
                                                                            : "#6b21a8",
                                                                    fontWeight: 600,
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Chip
                                                                label={
                                                                    user.status
                                                                }
                                                                size="small"
                                                                sx={{
                                                                    bgcolor:
                                                                        user.status ===
                                                                        "Active"
                                                                            ? "#dcfce7"
                                                                            : "#fef3c7",
                                                                    color:
                                                                        user.status ===
                                                                        "Active"
                                                                            ? "#166534"
                                                                            : "#92400e",
                                                                    fontWeight: 600,
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant="body2">
                                                                {user.joinDate}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Popular Courses */}
                        <Grid item size={{ xs: 12, lg: 4 }}>
                            <Card sx={{ height: "100%" }}>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, mb: 3 }}
                                    >
                                        Popular Courses
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 3,
                                        }}
                                    >
                                        {popularCourses.map((course) => (
                                            <Box key={course.id}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        mb: 1,
                                                    }}
                                                >
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontWeight: 600,
                                                                mb: 0.5,
                                                            }}
                                                        >
                                                            {course.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="caption"
                                                            color="text.secondary"
                                                        >
                                                            {course.students}{" "}
                                                            students •{" "}
                                                            {course.revenue}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 2,
                                                    }}
                                                >
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={
                                                            course.completion
                                                        }
                                                        sx={{
                                                            flexGrow: 1,
                                                            height: 8,
                                                            borderRadius: 4,
                                                            bgcolor: "#e2e8f0",
                                                            "& .MuiLinearProgress-bar":
                                                                {
                                                                    bgcolor:
                                                                        course.completion >=
                                                                        90
                                                                            ? "#10b981"
                                                                            : course.completion >=
                                                                                80
                                                                              ? "#3b82f6"
                                                                              : "#f59e0b",
                                                                    borderRadius: 4,
                                                                },
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            fontWeight: 600,
                                                            minWidth: 45,
                                                        }}
                                                    >
                                                        {course.completion}%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Info Banner */}
                    <Card
                        sx={{
                            mt: 4,
                            bgcolor: "#eff6ff",
                            border: "2px solid #3b82f6",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    color: "#1e40af",
                                    mb: 1,
                                }}
                            >
                                📊 Demo Admin Panel
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This is a hardcoded demo admin panel for
                                showcase purposes only. All data displayed
                                (users, courses, metrics) is static and for
                                demonstration. No backend functionality is
                                implemented. The sidebar navigation is for
                                visual demonstration only.
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Box>
    );
}
