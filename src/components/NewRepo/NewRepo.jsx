import React, { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, IconButton, Box, Heading, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";
import styles from './NewRepo.module.css';

function NewRepo() {
  const [repos, setRepos] = useState([]);
  const [newRepo, setNewRepo] = useState({ name: "", description: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setNewRepo({ ...newRepo, [event.target.name]: event.target.value });
  };

  const handleCreateRepo = () => {
    setRepos([...repos, newRepo]);
    setNewRepo({ name: "", description: "" });
    setIsOpen(false);
  };

  const handleUpdateRepo = (index, updatedRepo) => {
    const updatedRepos = repos.map((repo, i) => (i === index ? updatedRepo : repo));
    setRepos(updatedRepos);
  };

  const handleDeleteRepo = (index) => {
    const updatedRepos = repos.filter((_, i) => i !== index);
    setRepos(updatedRepos);
  };

  return (
    <>
      <Button className={`${styles.button}`} onClick={() => setIsOpen(true)} leftIcon={<AddIcon />}>Create New Repo</Button>

      <div className={`${styles.cont}`}>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={`${styles.modal}`} >
          <ModalOverlay />
          <ModalContent bg="blue.50">
            <ModalHeader className={`${styles["modal-header"]}`}>Create New Repo</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody bg='gray.200' className={`${styles["modal-body"]}`}>
              <FormControl className={`${styles["form-control"]}`}>
                <FormLabel color='blue.700' className={`${styles["form-label"]}`}>Name</FormLabel>
                <Input className={`${styles["input"]}`} name="name" value={newRepo.name} onChange={handleInputChange} bg='white' color='black' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel className={`${styles["form-label"]}`} color='blue.700'>Description</FormLabel>
                <Textarea className={`${styles.textarea}`} name="description" value={newRepo.description} onChange={handleInputChange} bg='white' color='black' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCreateRepo} rightIcon={<AddIcon />}>
                Create
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)} rightIcon={<CloseIcon />}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      {repos.map((repo, index) => (
        <Box className={`${styles["repo-box"]}`} key={index} p={5} borderWidth={1} borderRadius="lg" mb={4}>
          <Heading className={`${styles["repo-name"]}`} as="h2" size="lg">{repo.name}</Heading>
          <Text className={`${styles["repo-description"]}`} mb={4}>{repo.description}</Text>
          <Button className={`${styles["update-button"]}`} colorScheme="blue" onClick={() => handleUpdateRepo(index, { name: "Updated Name", description: "Updated Description" })}>Update Repo</Button>
          <IconButton aria-label="Delete repo" icon={<DeleteIcon />} colorScheme="red" onClick={() => handleDeleteRepo(index)} ml={2} className={`${styles["delete-button"]}`} />
        </Box>
      ))}
    </>
  );
}

export default NewRepo;