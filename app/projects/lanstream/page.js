import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Undo2 } from 'lucide-react';
import { Footer } from '../../../components/Footer';


const LanstreamPage = () => {
  return (
    <>
    {/* Back Button - Adjusted top and left for smaller screens */}
          <Link href="/" className="sticky top-4 sm:top-10 left-4 sm:left-8 z-50 duration-300">
            <Undo2 size={40} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
          </Link>
      {/* Main Container - Responsive padding: px-4 on mobile, px-10 on sm, px-40 on lg */}
      <div className="bg-slate-950 text-gray-300 text-lg px-4 sm:px-10 lg:px-40 flex flex-col items-center">
        {/* Header Section */}
        <header className="text-center mb-6 w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-100 mb-4 tracking-tight">
            LANstream
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-gray-300">
            A full-stack video streaming solution designed for seamless, high-quality media playback within a local area network (LAN).
          </p>
        </header>

         {/* Responsive Design Showcase Section */}
        <section className="p-8 w-full mx-auto text-center mb-4">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            Designed for Your Local Network
          </h2>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Desktop Screen Image */}
            <div className="absolute flex items-center justify-center z-10 rounded-xl border-4 md:rounded-4xl border-gray-600 ">
              <Image
                src="/lanstream_thumbnail.png"
                alt="LANStream on desktop"
                width={1000}
                height={600}
                className="w-full h-auto object-contain animate-fade-in rounded-xl md:rounded-4xl"
              />
            </div>

            {/* Mobile Screen Image */}
            <div className="absolute -left-80 inset-0 md:-left-60 flex items-center justify-center z-20 lg:flex">
              <Image
                src="/lanstream_mobile.png"
                alt="LANStream on mobile"
                width={300}
                height={600}
                className="h-[100%] w-auto object-contain animate-fade-in animation-delay-300 rounded-4xl border-4 border-gray-600"
                style={{ transform: 'translateY(10%) translateX(180%) ' }}
              />
            </div>
          </div>
        </section>


        {/* Project Overview */}
        <section className="mb-12 w-full ">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Project Overview
          </h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            LANstream is a self-contained media streaming application. The player uses <span className="font-bold text-indigo-400">DASH (Dynamic Adaptive Streaming over HTTP)</span> to deliver video content from a local server to any device on the same network. This approach ensures low latency and high-speed playback without relying on external internet connections or cloud services.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Key features include: <span className="font-bold">adaptive bitrate streaming</span>, <span className="font-bold">responsive UI</span>, <span className="font-bold">user progress tracking</span>, and <span className="font-bold">robust playback controls</span>, all optimized for a local network environment.
          </p>
        </section>

        {/* Video 1: Local Setup */}
          <section className=" p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Local Setup and Running the Project
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              This video demonstrates how to run the backend and frontend on the local machine. It also shows the initial warnings related to self-signed certificates that a user must accept for first-time access in a LAN environment.
            </p>
            <div className="flex justify-center">
              {/* Responsive width: full width max-w-3xl on mobile, constrained on desktop */}
              <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden cursor-pointer group">
                <a href="https://www.youtube.com/watch?v=k2tijbZ_J64" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/lanstream_thumbnail.png"
                    alt="Thumbnail for Local Setup"
                    className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 md:opacity-0 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                    <img src="/yt_logo_fullcolor_white_digital.png" alt="Youtube Logo" />
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Video 2: PC Walkthrough */}
          <section className=" p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Desktop (PC) Walkthrough
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              A walkthrough of the player's functionality on a desktop computer. This showcases the custom controls, responsive layout, and the adaptive streaming in action within the high-speed local network.
            </p>
            <div className="flex justify-center">
              {/* Responsive width: full width max-w-3xl on mobile, constrained on desktop */}
              <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden cursor-pointer group">
                <a href="https://www.youtube.com/watch?v=BTK19KNDHQI" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/lanstream_thumbnail.png"
                    alt="Thumbnail for PC Walkthrough"
                    className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex md:opacity-0 items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                    <img src="/yt_logo_fullcolor_white_digital.png" alt="Youtube Logo" />
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Video 3: Mobile Walkthrough */}
          <section className=" p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Mobile Device Walkthrough
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              This video demonstrates the project on a mobile device within the same LAN. It highlights the responsive design and the seamless transition to fullscreen landscape mode, which is crucial for a mobile viewing experience.
            </p>
            <div className="flex justify-center">
              {/* Responsive width: full width max-w-sm on mobile, w-1/6 only on large screens */}
              <div className="relative w-full max-w-sm lg:w-1/6 rounded-3xl overflow-hidden cursor-pointer group">
                <a href="https://www.youtube.com/shorts/9eEaTk2OQ0U" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/lanstream_mobile.png"
                    alt="Thumbnail for Mobile Walkthrough"
                    className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-50 md:opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <img src="/yt_logo_fullcolor_white_digital.png" alt="Youtube Logo" />
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        

        {/* Streaming Architecture - Responsive padding: px-4 on mobile, px-10 on sm, px-40 on lg */}
        <section className="mb-12 px-4 sm:px-10 lg:px-40 ">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Streaming Architecture: How it all Works
          </h2>
          {/* Added text-base sm:text-lg for font size and break-words for line wrapping */}
          <article className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg break-words">
            <p>The system's core is the DASH (Dynamic Adaptive Streaming over HTTP) protocol. The backend doesn't stream a single video file; instead, it provides a Manifest (<code className="text-indigo-400">.mpd</code> file) and multiple fragmented video files (<code className="text-indigo-400">.m4s</code> files).</p>

            <h3 className="text-3xl font-semibold text-gray-100 mb-2 mt-8">Adaptive Bitrate Algorithms</h3>
            <p>
              Adaptive Bitrate (ABR) is the core of DASH's functionality. The client-side player, such as Dash.js, doesn't just play a video; it constantly makes intelligent decisions about which video quality to download next by monitoring the user's <span className="font-bold">network throughput</span> and the player's <span className="font-bold">buffer level</span>.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                <span className="font-bold">Throughput-based algorithms</span> measure the download speed of recent video segments to predict future network capacity. If the measured throughput is high, the player will request a higher quality segment.
              </li>
              <li>
                <span className="font-bold">Buffer-based algorithms</span> prioritize the player's buffer. If the buffer is full, it's a good sign that the network can handle a higher bitrate. If the buffer is getting low, the player requests a lower quality segment to quickly fill the buffer and maintain smooth playback. The <span className="font-bold">Buffer Occupancy-based Lyapunov Algorithm (BOLA)</span> is a well-known example.
              </li>
            </ul>
            <p className="mt-4">
              Dash.js's default strategy, <span className="font-bold">'abrDynamic'</span>, is a hybrid approach that switches between a throughput-based rule and a buffer-based rule to balance video quality and playback stability. This ensures the player can ramp up to a high quality when the network is good while keeping the buffer healthy to avoid interruptions.
            </p>

            <img src='/dash_files.png' className='my-6' alt='Diagram showing DASH video files and manifest.' />

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Manifest (<code className="text-indigo-400">.mpd</code> file):</h4>
            <p>This XML file is the key to adaptive streaming. It describes the video, including the available qualities (e.g., 360p, 720p, 1080p), the locations of the video fragments for each quality, and synchronization information.</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Video Fragments (<code className="text-indigo-400">.m4s</code> files):</h4>
            <p>The video is divided into small, separate chunks. Your backend serves these chunks as the player requests them.</p>
            <p>The Dash.js player on the frontend works with the backend to provide seamless video playback. It parses the manifest and then requests the video fragments. The player intelligently switches between different video qualities based on the user's network conditions, which is crucial for a LAN-based streaming application. The Flask backend acts as the central hub for the media, and the React frontend provides the interactive user experience on any connected device.</p>
          </article>
        </section>

        {/* Getting Started Guide - Responsive padding: px-4 on mobile, px-10 on sm, px-40 on lg */}
        <section className="mb-12 px-4 sm:px-10 lg:px-40">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Getting Started
          </h2>

          {/* Added text-base sm:text-lg for font size and break-words for line wrapping */}
          <article className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg break-words">
            <p>Running the Flask server with <code className="text-indigo-400">python run.py</code> instead of <code className="text-indigo-400">flask run</code> is a common practice when a project requires custom setup logic. Here's an updated guide that uses this command and includes the custom CLI commands you've created.</p>

            <h3 className="text-3xl font-semibold text-gray-100 mb-2">1. Backend Setup and Execution (Flask)</h3>
            <p>The backend, built with Flask, acts as the media server. It serves the video files and handles API requests from the frontend.</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Setup</h4>
            <p>Navigate to the backend directory and create a virtual environment to manage dependencies:</p>
            {/* Added overflow-x-auto to allow horizontal scrolling for long commands */}
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">python -m venv venv</code></pre>
            <p>Activate the virtual environment:</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400"><span className='text-gray-100'>On macOS/Linux:</span> source venv/bin/activate</code></pre>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400"><span className='text-gray-100'>On Windows:</span> .&#92;venv&#92;Scripts&#92;activate</code></pre>
            <p>Install dependencies using the <code>requirements.txt</code> file:</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">pip install -r requirements.txt</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Enabling HTTPS</h4>
            <p>The backend is configured to use HTTPS to secure communication between the server and clients on the local network. This is handled by the 'run.py' script, which launches the Flask development server with SSL/TLS certificates. The initial connection will use a self-signed certificate, which may cause a security warning in your browser. You can safely proceed past this warning to access the application. The 'ssl_context=('cert.pem', 'key.pem')' parameter in the 'run.py' script is what instructs Flask to use the specific certificate files you generated. </p>

            <p>You must generate these 'cert.pem' and 'key.pem' files and place them in the backend directory before running the server.</p>
            <p>Here are the steps to create the necessary certificate and key files:</p>

            <h5 className="text-xl font-medium text-gray-100 mb-1 mt-4">Step 1: Open a Terminal or Command Prompt</h5>
            <p>Open a terminal on macOS or Linux, or a command prompt/PowerShell on Windows.</p>

            <h5 className="text-xl font-medium text-gray-100 mb-1 mt-4">Step 2: Navigate to the Backend Directory</h5>
            <p>Use the 'cd' command to move into your project's 'backend' directory where the 'run.py' script is located. This is important so the Flask application can find the files.</p>

            <h5 className="text-xl font-medium text-gray-100 mb-1 mt-4">Step 3: Run the OpenSSL Command</h5>
            <p>Execute the following command to generate the private key ('key.pem') and the self-signed certificate ('cert.pem').</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365</code></pre>

            <h5 className="text-xl font-medium text-gray-100 mb-1 mt-4">Step 4: Fill in the Certificate Information</h5>
            <p>You will be prompted to enter some information. When you get to the "Common Name (e.g., server FQDN or YOUR name)" field, you should enter your **computer's local IP address** (e.g., '192.168.1.10') or 'localhost'. This is crucial for the browser to recognize the certificate for your specific server. Once completed, the 'key.pem' and 'cert.pem' files will be created in the 'backend' directory.</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Environment File</h4>
            {/* Added text-sm to shrink font slightly on mobile and overflow-x-auto */}
            <p>Create a file named <code className="text-indigo-400">.env</code> in the backend directory with the following variables:</p>
            <pre className="bg-slate-800 p-3 rounded-lg text-gray-300 text-sm overflow-x-auto"><code>FLASK_ENV=development <br />
              SECRET_KEY=supersecretkeyforexample_DO_NOT_USE_IN_PRODUCTION_12345<br />
              DATABASE_URL=postgresql://username:password@localhost:5432/dbname<br />
              BACKEND_URL=https://192.168.18.6:5000/api<br />
              MEDIA_PATH=/home/usr/Videos/Media<br />
            </code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">How to Update</h4>
            <p>To get your project running, you must replace the placeholder values in the <code>.env</code> file with your specific details. Open the file in a text editor and update each line as follows:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><span className="font-bold">SECRET_KEY</span>: You must change this value. Generate a strong, random string and replace the example value.</li>
              <li><span className="font-bold">DATABASE_URL</span>: Update this with your PostgreSQL database credentials. Replace the username, password, host, port, and database name with your own.</li>
              <li><span className="font-bold">BACKEND_URL</span>: Replace the example IP address with your computer's **local IP address**. This is necessary for other devices on your LAN to access the server.</li>
              <li><span className="font-bold">MEDIA_PATH</span>: Set this to the **absolute path** of the folder where you store your video files on the server.</li>
            </ul>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Execution</h4>
            <p>Run the Flask server. It will serve the media files and API endpoints, accessible to other devices on the same LAN.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">python run.py</code></pre>

            <h3 className="text-3xl font-semibold text-gray-100 mb-2 mt-8">2. Database Management</h3>
            <p>Your project uses Flask-Migrate to handle database schema changes. Here's how to use the crucial commands:</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Database Migration:</h4>
            <p>The <code className="text-indigo-400">db migrate</code> command automatically generates a migration script based on changes you've made to your database models. It's a key part of managing your PostgreSQL database schema.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">flask db migrate</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Database Upgrade:</h4>
            <p>The <code className="text-indigo-400">db upgrade</code> command applies the pending migration scripts to your database, updating the schema to the latest version. This is the command you run to apply new changes.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">flask db upgrade</code></pre>
            <p>These commands are executed on the server machine to manage the database and are separate from running the server itself.</p>

            <h3 className="text-3xl font-semibold text-gray-100 mb-2 mt-8">3. Media Management CLI Tools</h3>
            <p>The project includes custom command-line interface tools to simplify media library management and video packaging. Use the 'flask' command to access them:</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Scan Media:</h4>
            <p>This command scans your designated media directory, adds new files to the database, and removes any files that have been deleted from the disk. This keeps your database in sync with your physical media library.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">flask scan-media</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">List Media:</h4>
            <p>This command displays a list of all media files currently stored in your database, along with their IDs, titles, and file paths. It's a useful utility for verifying which files are available in your application.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">flask list-media</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Package DASH:</h4>
            <p>This custom command automates the entire DASH packaging process. You can use it to convert specific video files by their IDs or to process all video files in the database using the <code className="text-indigo-400">--all</code> flag.</p>
            {/* Added text-sm to shrink font slightly on mobile and overflow-x-auto */}
            <pre className="bg-slate-800 p-3 rounded-lg text-sm overflow-x-auto"><code className="language-bash text-indigo-400">
              flask package-dash [media_id(s)] <br />
              flask package-dash --all
            </code></pre>
            <p>Replace <code className="text-indigo-400">[media_id(s)]</code> with one or more media IDs to package specific videos. The <code className="text-indigo-400">--all</code> flag processes all videos in the database.</p>

            <h3 className="text-3xl font-semibold text-gray-100 mb-2 mt-8">4. Frontend Setup and Execution (React)</h3>
            <p>The frontend is a React application powered by Vite. It contains the user interface and the video player itself.</p>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Setup</h4>
            <p>Navigate to the frontend directory and install the Node.js dependencies:</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">npm install</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Execution</h4>
            <p>Run the Vite development server. This server will host the React app.</p>
            <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto"><code className="language-bash text-indigo-400">npm run dev</code></pre>

            <h4 className="text-2xl font-medium text-gray-100 mb-1 mt-4">Environment File</h4>
            <p>Create a file named <code className="text-indigo-400">.env</code> in the frontend directory with the following variable:</p>
            <pre className="bg-slate-800 p-3 rounded-lg text-gray-300 overflow-x-auto"><code>VITE_BACKEND_BASE_URL=https://192.168.18.6:5000</code></pre>
            <p>This URL must match the IP address of your backend server on the local network.</p>
          </article>
        </section>

        <div className="w-full space-y-12">

          {/* Technical Stack - Responsive padding: px-4 on mobile, px-10 on sm, px-40 on lg */}
        <section className="mt-12 px-4 sm:px-10 lg:px-40 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Tech Stack
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="p-4 bg-slate-800 rounded-lg flex-1">
              <p className="font-bold text-xl text-gray-100 mb-2">Frontend (React)</p>
              <ul className="text-lg list-disc list-inside text-left">
                <li><span className="font-bold">React</span> - UI development with Vite</li>
                <li><span className="font-bold">React Router</span> - Client-side routing</li>
                <li><span className="font-bold">Tailwind CSS</span> - Utility-first styling</li>
                <li><span className="font-bold">Axios</span> - Promise-based HTTP client for API requests</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg flex-1">
              <p className="font-bold text-xl text-gray-100 mb-2">Video & Backend (Python)</p>
              <ul className="text-lg list-disc list-inside text-left">
                <li><span className="font-bold">Dash.js</span> - DASH video playback library</li>
                <li><span className="font-bold">Flask</span> - Web framework for the backend API</li>
                <li><span className="font-bold">PostgreSQL</span> - Relational database for data storage</li>
                <li><span className="font-bold">Flask-SQLAlchemy</span> & <span className="font-bold">Flask-Migrate</span> - ORM and database migrations</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg flex-1">
              <p className="font-bold text-xl text-gray-100 mb-2">Video Transcoding</p>
              <ul className="text-lg list-disc list-inside text-left">
                <li><span className="font-bold">FFmpeg</span> - Open-source tool for video processing and conversion</li>
                <li><span className="font-bold">ffprobe</span> - Companion tool for analyzing media file properties and streams</li>
              </ul>
            </div>
          </div>
        </section>
          

        {/* GitHub Link */}
        <section className="mt-12 w-full text-center mb-4">
          <a
            href="https://github.com/Hemant-G/LANStream"
            className="inline-block bg-indigo-400 hover:bg-slate-800 text-gray-950 hover:text-gray-50 font-bold py-3 px-8 rounded-full transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code on GitHub
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LanstreamPage;