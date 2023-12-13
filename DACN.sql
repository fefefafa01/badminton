--
-- PostgreSQL database cluster dump
--

-- Started on 2023-12-13 14:49:25

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:0hshKO/417hAcbUsm1vm4g==$kfzUrek49yZCLI0i7yOqWsjPZB/KRMFc8WvJjV2tIxg=:LQzUJ+K/729/ngCR26WjUvn6pHaUwz2GFzO4ZMqTKCU=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-12-13 14:49:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2023-12-13 14:49:25

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-12-13 14:49:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16398)
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    name character varying(255) NOT NULL,
    admin_id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16457)
-- Name: booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.booking (
    date time without time zone NOT NULL,
    "time" time without time zone,
    status character varying(255) NOT NULL,
    booking_id integer NOT NULL,
    payment_id integer,
    customer_id integer
);


ALTER TABLE public.booking OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16439)
-- Name: court; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.court (
    court_id integer NOT NULL,
    name character varying(255) NOT NULL,
    availability boolean DEFAULT false NOT NULL,
    type character varying(255),
    payment_id integer,
    customer_id integer
);


ALTER TABLE public.court OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16405)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    name character varying(255) NOT NULL,
    customer_id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16422)
-- Name: notification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notification (
    notification_id integer NOT NULL,
    message text,
    admin_id integer,
    customer_id integer
);


ALTER TABLE public.notification OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16412)
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    payment_date time without time zone NOT NULL,
    payment_id integer NOT NULL,
    amount integer,
    customer_id integer
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- TOC entry 3355 (class 0 OID 16398)
-- Dependencies: 215
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin (name, admin_id, email, password) FROM stdin;
\.


--
-- TOC entry 3360 (class 0 OID 16457)
-- Dependencies: 220
-- Data for Name: booking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.booking (date, "time", status, booking_id, payment_id, customer_id) FROM stdin;
\.


--
-- TOC entry 3359 (class 0 OID 16439)
-- Dependencies: 219
-- Data for Name: court; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.court (court_id, name, availability, type, payment_id, customer_id) FROM stdin;
\.


--
-- TOC entry 3356 (class 0 OID 16405)
-- Dependencies: 216
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (name, customer_id, email, password) FROM stdin;
\.


--
-- TOC entry 3358 (class 0 OID 16422)
-- Dependencies: 218
-- Data for Name: notification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notification (notification_id, message, admin_id, customer_id) FROM stdin;
\.


--
-- TOC entry 3357 (class 0 OID 16412)
-- Dependencies: 217
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment (payment_date, payment_id, amount, customer_id) FROM stdin;
\.


--
-- TOC entry 3195 (class 2606 OID 16404)
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (admin_id);


--
-- TOC entry 3205 (class 2606 OID 16461)
-- Name: booking booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (booking_id);


--
-- TOC entry 3203 (class 2606 OID 16446)
-- Name: court court_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court
    ADD CONSTRAINT court_pkey PRIMARY KEY (court_id);


--
-- TOC entry 3197 (class 2606 OID 16411)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);


--
-- TOC entry 3201 (class 2606 OID 16428)
-- Name: notification notification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_pkey PRIMARY KEY (notification_id);


--
-- TOC entry 3199 (class 2606 OID 16416)
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);


--
-- TOC entry 3211 (class 2606 OID 16467)
-- Name: booking booking_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


--
-- TOC entry 3212 (class 2606 OID 16462)
-- Name: booking booking_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.payment(payment_id);


--
-- TOC entry 3209 (class 2606 OID 16452)
-- Name: court court_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court
    ADD CONSTRAINT court_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


--
-- TOC entry 3210 (class 2606 OID 16447)
-- Name: court court_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court
    ADD CONSTRAINT court_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.payment(payment_id);


--
-- TOC entry 3207 (class 2606 OID 16429)
-- Name: notification notification_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admin(admin_id);


--
-- TOC entry 3208 (class 2606 OID 16434)
-- Name: notification notification_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


--
-- TOC entry 3206 (class 2606 OID 16417)
-- Name: payment payment_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


-- Completed on 2023-12-13 14:49:25

--
-- PostgreSQL database dump complete
--

-- Completed on 2023-12-13 14:49:25

--
-- PostgreSQL database cluster dump complete
--

