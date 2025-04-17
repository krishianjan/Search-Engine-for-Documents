 Document Search Engine

📌 Project Overview:
This project is an intelligent document search engine designed to streamline document retrieval from large repositories of PDF and Word files. Users can upload documents to the system, which then leverages Natural Language Processing (NLP) techniques and linked lists for efficient information extraction and indexing. Upon receiving a search query, the system highlights matched keywords in real-time within the uploaded documents, offering a seamless, color-coded, and user-friendly search experience.

🎯 Use Case:
Aimed at businesses and organizations dealing with extensive document collections — contracts, legal files, reports, and academic papers — this system simplifies locating and reviewing critical information across document libraries without manual searching.

🛠️ Technologies Used:
Backend:

Python (Core programming language)

Django (Web framework for backend APIs and business logic)

Flask (For lightweight microservices and specific API endpoints)

Databases:

MongoDB (For storing unstructured document data and extracted metadata)

PostgreSQL (For relational data management like user accounts and search logs)

Natural Language Processing:

NLTK, spaCy (for tokenization, keyword extraction, and text processing)

PyPDF2, python-docx (for reading and parsing PDF and Word files)

Frontend:

HTML, CSS, JavaScript (for UI design and interactive features)

AJAX (for asynchronous search requests and real-time highlighting)

Deployment & DevOps:

Docker (for containerized deployment)

Heroku/AWS (optional cloud hosting setup)

Authentication & Security:

Django’s in-built authentication framework for user registration and login

Basic role-based access control for document upload and search privileges

Performance & Scalability:

Indexed linked lists for optimized in-memory search traversal

Pagination and lazy loading for large document collections








