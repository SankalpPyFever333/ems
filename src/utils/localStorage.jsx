
const employees = [
      {
            "id": 1,
            "firstName": "Employee1",
            "email": "emp1@example.com",
            "password": "abc",
            "taskCount": {
                  "active": 1,
                  "completed": 1,
                  "failed": 0,
                  "newTask": 1
            },
            "tasks": [
                  {
                        "task_title": "Prepare Report",
                        "description": "Create the monthly sales report.",
                        "date": "2025-02-09",
                        "category": "Reporting",
                        "status": "In Progress",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": true
                  },
                  {
                        "task_title": "Prepare Report for finance",
                        "description": "Create the yearly sales report.",
                        "date": "2025-02-09",
                        "category": "Reporting",
                        "status": "In Progress",
                        "active": true,
                        "new_task": false,
                        "completed": false,
                        "failed": false
                  },
                  {
                        "task_title": "Prepare Report",
                        "description": "Create the monthly material report.",
                        "date": "2025-02-09",
                        "category": "Reporting",
                        "status": "In Progress",
                        "active": false,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  },
                  {
                        "task_title": "Email Clients",
                        "description": "Send follow-up emails to pending leads.",
                        "date": "2025-02-08",
                        "category": "Communication",
                        "status": "Completed",
                        "active": false,
                        "new_task": false,
                        "completed": true,
                        "failed": false
                  }
            ]
      },
      {
            "id": 2,
            "firstName": "Employee2",
            "email": "emp2@example.com",
            "password": "xyz",
            "taskCount": {
                  "active": 1,
                  "completed": 1,
                  "failed": 1,
                  "newTask": 1
            },
            "tasks": [
                  {
                        "task_title": "Bug Fixing",
                        "description": "Resolve UI issues on the login page.",
                        "date": "2025-02-07",
                        "category": "Development",
                        "status": "In Progress",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  },
                  {
                        "task_title": "Code Review",
                        "description": "Review code changes for the new feature.",
                        "date": "2025-02-06",
                        "category": "Development",
                        "status": "Failed",
                        "active": false,
                        "new_task": false,
                        "completed": false,
                        "failed": true
                  },
                  {
                        "task_title": "Documentation",
                        "description": "Update API documentation.",
                        "date": "2025-02-05",
                        "category": "Documentation",
                        "status": "Completed",
                        "active": false,
                        "new_task": false,
                        "completed": true,
                        "failed": false
                  }
            ]
      },
      {
            "id": 3,
            "firstName": "Employee3",
            "email": "emp3@example.com",
            "password": "123",
            "taskCount": {
                  "active": 2,
                  "completed": 0,
                  "failed": 0,
                  "newTask": 2
            },
            "tasks": [
                  {
                        "task_title": "Client Meeting",
                        "description": "Discuss project requirements with the client.",
                        "date": "2025-02-10",
                        "category": "Meetings",
                        "status": "Scheduled",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  },
                  {
                        "task_title": "Create Mockups",
                        "description": "Design UI mockups for the new dashboard.",
                        "date": "2025-02-09",
                        "category": "Design",
                        "status": "In Progress",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  }
            ]
      },
      {
            "id": 4,
            "firstName": "Employee4",
            "email": "emp4@example.com",
            "password": "qwe",
            "taskCount": {
                  "active": 1,
                  "completed": 1,
                  "failed": 1,
                  "newTask": 1
            },
            "tasks": [
                  {
                        "task_title": "Database Migration",
                        "description": "Migrate database to a new server.",
                        "date": "2025-02-07",
                        "category": "Database",
                        "status": "Failed",
                        "active": false,
                        "new_task": false,
                        "completed": false,
                        "failed": true
                  },
                  {
                        "task_title": "Security Audit",
                        "description": "Perform a security audit of the application.",
                        "date": "2025-02-06",
                        "category": "Security",
                        "status": "Completed",
                        "active": false,
                        "new_task": false,
                        "completed": true,
                        "failed": false
                  },
                  {
                        "task_title": "System Monitoring",
                        "description": "Monitor system logs for unusual activity.",
                        "date": "2025-02-05",
                        "category": "Operations",
                        "status": "In Progress",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  }
            ]
      },
      {
            "id": 5,
            "firstName": "Employee5",
            "email": "emp5@example.com",
            "password": "asd",
            "taskCount": {
                  "active": 1,
                  "completed": 1,
                  "failed": 0,
                  "newTask": 1
            },
            "tasks": [
                  {
                        "task_title": "Social Media Update",
                        "description": "Post updates on company social media.",
                        "date": "2025-02-09",
                        "category": "Marketing",
                        "status": "Completed",
                        "active": false,
                        "new_task": false,
                        "completed": true,
                        "failed": false
                  },
                  {
                        "task_title": "Market Research",
                        "description": "Analyze competitor strategies.",
                        "date": "2025-02-08",
                        "category": "Research",
                        "status": "In Progress",
                        "active": true,
                        "new_task": true,
                        "completed": false,
                        "failed": false
                  }
            ]
      }
]

const admin = [{
      "id": 101,
      "email": "admin@example.com",
      "password": "adm",
      "firstName": "Admin1",
}]

export const setLocalStorage = () => {
      localStorage.setItem("employees", JSON.stringify(employees));
      localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
      const employess = localStorage.getItem('employees')
      const adminD = localStorage.getItem('admin')
      const empData = JSON.parse(employess);
      const adminData = JSON.parse(adminD)
      return { empData, adminData }
}